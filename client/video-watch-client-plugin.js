import {
  settings,
  loadContribAds,
  mergeVideoDataWithPluginSettings,
  getRollsStatus,
  createVastSettings,
  buildVastPlayer
} from '../lib/shared.js';

function register ({ registerHook, peertubeHelpers }) {
  init(registerHook, peertubeHelpers)
    .catch(err => console.error('[VAST PLUGIN] Cannot initialize plugin', err))
}

async function init (registerHook, peertubeHelpers) {
  const s = await peertubeHelpers.getSettings();
  if (!s) {
    console.error('Could not find settings.')
    return
  }

  const pluginSettings = settings(s);
  const rollsStatus = getRollsStatus(pluginSettings);

  registerHook({
    target: 'filter:internal.video-watch.player.load-options.result',
    handler: (result) => {
      if (rollsStatus.hasAtLeastOneRollEnabled) {
        result.autoplay = false;
      }

      return result;
    }
  })

  registerHook({
    target: 'action:video-watch.player.loaded',
    handler: async ({ videojs, player, video }) => {
      if (!rollsStatus.hasAtLeastOneRollEnabled) {
        let videoRollStatus = getRollsStatus(video?.pluginData?.vastVideo);
        if (!videoRollStatus.hasAtLeastOneRollEnabled) return;
      }

      window.videojs = videojs;
      window.player = player;

      console.log('[VAST PLUGIN] Player loaded pluginData', video?.pluginData?.vastVideo);
      console.log('[VAST PLUGIN] pluginSettings', pluginSettings);

      const videoPluginData = video?.pluginData?.vastVideo;
      let configData = getRollsStatus(videoPluginData).hasAtLeastOneRollEnabled ? mergeVideoDataWithPluginSettings(videoPluginData, pluginSettings) : pluginSettings;

      console.log('[VAST PLUGIN] CONFIG FINAAAAL', configData);

      await loadContribAds(player);

      try {
        const vastSettings = createVastSettings(configData);
        await buildVastPlayer(vastSettings, player);
      } catch (error) {
        console.error('[VAST PLUGIN] Error:', error);
      }
    }
  });
}

export { register }
