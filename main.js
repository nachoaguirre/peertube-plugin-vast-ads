const pluginSettings = require('./lib/pluginSettings');

async function register ({
  registerHook,
  registerSetting,
  settingsManager,
  storageManager,
  peertubeHelpers,
}) {
  pluginSettings.forEach((setting) => {
    registerSetting(setting);
  });

  const storageFieldName = 'vastVideo';

  registerHook({
    target: 'action:api.video.updated',
    handler: async ({ video, req }) => {
      if (!req.body.pluginData) return

      const pluginData = req.body.pluginData;
      const transformedData = {}

      if (pluginData['vast-video-preroll-enabled'] === 'true' && pluginData['vast-video-preroll-url']) {
        transformedData.preroll = {
          enabled: true,
          url: pluginData['vast-video-preroll-url']
        };
      }

      if (pluginData['vast-video-midroll-enabled'] === 'true' && pluginData['vast-video-midroll-url']) {
        transformedData.midroll = {
          enabled: true,
          url: pluginData['vast-video-midroll-url'],
          offset: pluginData['vast-video-midroll-offset'] || '25%'
        };
      }

      if (pluginData['vast-video-postroll-enabled'] === 'true' && pluginData['vast-video-postroll-url']) {
        transformedData.postroll = {
          enabled: true,
          url: pluginData['vast-video-postroll-url']
        };
      }

      if (Object.keys(transformedData).length > 0) {
        const value = JSON.stringify(transformedData);
        await storageManager.storeData(storageFieldName + '-' + video.id, value);
      }
    }
  })

  registerHook({
    target: 'filter:api.video.get.result',
    handler: async (video) => {
      if (!video) return video
      if (!video.pluginData) video.pluginData = {}

      const result = await storageManager.getData(storageFieldName + '-' + video.id)
      video.pluginData[storageFieldName] = result

      return video
    }
  })

  let settings = await getAllSettings(settingsManager);
  settingsManager.onSettingsChange(async (newSettings) => {
    settings = await updateSettingsContent(newSettings);
  });
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}

function getAllSettings(settingsManager) {
  return settingsManager.getSettings([
    'vast-preroll-enabled',
    'vast-preroll-url',
    'vast-midroll-enabled',
    'vast-midroll-url',
    'vast-midroll-offset',
    'vast-postroll-enabled',
    'vast-postroll-url',
    'vast-allow-define-config-per-video',
    'vast-allow-config-per-video-only-admins',
    'vast-embeded-enabled',
    'vast-player-controls-enabled',
    'vast-skip-time',
    'vast-message-skip-countdown',
    'vast-message-skip',
    'vast-message-remainingTime',
  ]);
}

async function updateSettingsContent(newSettings) {
  let updates;
  updates['vast-preroll-enabled'] = newSettings['vast-preroll-enabled'];
  updates['vast-preroll-url'] = newSettings['vast-preroll-url'];
  updates['vast-midroll-enabled'] = newSettings['vast-midroll-enabled'];
  updates['vast-midroll-url'] = newSettings['vast-midroll-url'];
  updates['vast-midroll-offset'] = newSettings['vast-midroll-offset'];
  updates['vast-postroll-enabled'] = newSettings['vast-postroll-enabled'];
  updates['vast-postroll-url'] = newSettings['vast-postroll-url'];
  updates['vast-embeded-enabled'] = newSettings['vast-embeded-enabled'];
  updates['vast-player-controls-enabled'] = newSettings['vast-player-controls-enabled'];
  updates['vast-skip-time'] = newSettings['vast-skip-time'];
  updates['vast-message-skip-countdown'] = newSettings['vast-message-skip-countdown'];
  updates['vast-message-skip'] = newSettings['vast-message-skip'];
  updates['vast-message-remainingTime'] = newSettings['vast-message-remainingTime'];
  updates['vast-allow-define-config-per-video'] = newSettings['vast-allow-define-config-per-video'];
  updates['vast-allow-config-per-video-only-admins'] = newSettings['vast-allow-config-per-video-only-admins'];

  return updates;
}
