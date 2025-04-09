const DEFAULT_SKIP_TIME = 8;
const DEFAULT_SKIP_COUNTDOWN_MESSAGE = 'Skip in {seconds}...';
const DEFAULT_SKIP_MESSAGE = 'Skip';

export const settings = (s) => ({
  preroll: {
    enabled: s['vast-preroll-enabled'] ?? false,
    url: s['vast-preroll-url'],
  },
  midroll: {
    enabled: s['vast-midroll-enabled'] ?? false,
    url: s['vast-midroll-url'],
    offset: s['vast-midroll-offset'] ?? '25%',
  },
  postroll: {
    enabled: s['vast-postroll-enabled'] ?? false,
    url: s['vast-postroll-url'],
  },
  embededEnabled: s['vast-embeded-enabled'] ?? true,
  controlsEnabled: s['vast-player-controls-enabled'] ?? true,
  skipTime: s['vast-skip-time'] ?? DEFAULT_SKIP_TIME,
  messageSkipCountdown: s['vast-message-skip-countdown'] ?? DEFAULT_SKIP_COUNTDOWN_MESSAGE,
  messageSkip: s['vast-message-skip'] ?? DEFAULT_SKIP_MESSAGE,
  messageRemainingTime: s['vast-message-remainingTime'],
});

export const loadContribAds = async (player) => {
  try {
    const { default: contrib } = await import('../public/scripts/videojs.ads.min.js');
    player.ads({debug: false, allowVjsAutoplay: true})
  } catch (error) {
    console.error('Error loading ads plugin:', error);
  }
}

export const getRollsStatus = (pluginSettings) => {
  const isRollEnabled = (roll) => roll?.url && roll?.enabled;

  const rolls = {
    preroll: isRollEnabled(pluginSettings?.preroll),
    midroll: isRollEnabled(pluginSettings?.midroll),
    postroll: isRollEnabled(pluginSettings?.postroll),
  };

  return {
    ...rolls,
    hasAtLeastOneRollEnabled: Object.values(rolls).some(Boolean),
  };
};

export const mergeVideoDataWithPluginSettings = (videoPluginData, pluginSettings) => {
  if (!videoPluginData) {
    return pluginSettings;
  }

  const updatedConfig = {...pluginSettings};

  for (const category in videoPluginData) {
    if (Object.prototype.hasOwnProperty.call(videoPluginData, category)) {
      if (updatedConfig[category]) {
        updatedConfig[category] = {
          ...updatedConfig[category],
          ...videoPluginData[category]
        };
      } else {
        updatedConfig[category] = {...videoPluginData[category]};
      }
    }
  }

  return updatedConfig;
}

export const createVastSettings = (pluginSettings) => {
  const { skipTime, controlsEnabled, messageSkip, messageSkipCountdown, messageRemainingTime } = pluginSettings;

  const vastSettings = {
    skip: skipTime,
    controlsEnabled: controlsEnabled,
    seekEnabled: controlsEnabled,
    withCredentials: false,
    messages: {
      skip: messageSkip,
      skipCountdown: messageSkipCountdown,
    },
    schedule: [],
  };

  if (messageRemainingTime?.includes('{seconds}')) {
    Object.assign(vastSettings, {
      displayRemainingTime: true,
      displayRemainingTimeIcons: true,
      messages: { ...vastSettings.messages, remainingTime: messageRemainingTime },
    });
  }

  const rollsStatus = getRollsStatus(pluginSettings);

  const rollConfigs = {
    preroll: { offset: 'pre', roll: 'pre' },
    midroll: { offset: pluginSettings.midroll.offset, roll: 'mid' },
    postroll: { offset: 'post', roll: 'post' }
  };

  Object.entries(rollConfigs).forEach(([rollType, { offset, roll }]) => {
    if (rollsStatus[rollType]) {
      const rollUrl = pluginSettings[rollType].url;

      if (rollUrl && offset) {
        vastSettings.schedule.push({
          offset: offset,
          url: rollUrl,
        });
      }
    }
  });

  return vastSettings;
}

export const buildVastPlayer = async (vastSettings, player) => {
  try {
    const { default: VastPlugin } = await import('../public/scripts/videojsx.vast.js');
    player.vast(vastSettings);
  } catch (error) {
    console.error('Error loading VastPlugin:', error);
  }
}
