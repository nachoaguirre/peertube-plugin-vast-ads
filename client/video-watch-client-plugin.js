import {
  settings,
  loadContribAds,
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
      if (!rollsStatus.hasAtLeastOneRollEnabled) return;

      window.videojs = videojs;
      window.player = player;

      console.log('[VAST PLUGIN] Player loaded pluginData', video?.pluginData);
      console.log('[VAST PLUGIN] Player loaded', video);

      await loadContribAds(player);

      try {
        const vastSettings = createVastSettings(pluginSettings);
        await buildVastPlayer(vastSettings, player);
      } catch (error) {
        console.error('[VAST PLUGIN] Error:', error);
      }
    }
  });
}

export { register }
