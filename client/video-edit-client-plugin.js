function register ({ registerHook, registerVideoField, peertubeHelpers }) {
  const customTabName = 'plugin-settings';

  const vastAdSettings_Title = {
    name: 'vast-video-settings-banner',
    type: 'html',
    html: `
      <div class="content-col text-center" id="video-plugin-form-tab">
        <div class="callout callout-orange">
          <span class="fw fs-3">Customize VAST ad settings for this video</span>
          <br />
          <span class="fst-italic text-muted">The settings you define here will override the plugin's global settings...</span>
        </div>
      </div>
    `,
  }

  const pluginVideoSettings = [
    // PREROLL SETTINGS
    {
      name: 'vast-video-preroll-title',
      type: 'html',
      html: '<h3>Ads before video</h3>',
    },
    {
      name: 'vast-video-preroll-enabled',
      label: 'Enable video ads before this video',
      type: 'input-checkbox',
      default: false,
      private: false,
    },
    {
      name: 'vast-video-preroll-url',
      label: 'Vast URL',
      type: 'input',
      descriptionHTML: 'The vast.xml URL for ads before video',
      private: false,
    },

    // MIDROLL SETTINGS
    {
      name: 'vast-video-midroll-title',
      type: 'html',
      html: '<br /><h3>Ads in middle of video</h3>',
    },
    {
      name: 'vast-video-midroll-enabled',
      label: 'Enable video ads in middle of video',
      type: 'input-checkbox',
      default: false,
      private: false,
    },
    {
      name: 'vast-video-midroll-url',
      label: 'Vast URL',
      type: 'input',
      descriptionHTML: 'The vast.xml URL for ads in middle of video',
      private: false,
    },
    {
      name: 'vast-video-midroll-offset',
      label: 'Offset',
      type: 'input',
      descriptionHTML: 'Offset in seconds or percentage of the video duration<br />(eg. 10 to start the ad at second 10, or 50% to start the ad at 50% of the video)',
      private: false,
      default: '25%',
    },

    // POSTROLL SETTINGS
    {
      name: 'vast-video-postroll-title',
      type: 'html',
      html: '<br /><h3>Ads after video</h3>',
    },
    {
      name: 'vast-video-postroll-enabled',
      label: 'Enable video ads after video',
      type: 'input-checkbox',
      default: false,
      private: false,
    },
    {
      name: 'vast-video-postroll-url',
      label: 'Vast URL',
      type: 'input',
      descriptionHTML: 'The vast.xml URL for ads before video',
      private: false,
    },

    // OTHER SETTINGS
    {
      name: 'vast-video-other-title',
      type: 'html',
      html: `<br /><h3>Other settings</h3>`,
    },
    {
      name: 'vast-video-embeded-enabled',
      label: 'Enable video ads in embedded players',
      type: 'input-checkbox',
      default: false,
      private: false,
    },
    {
      name: 'vast-video-player-controls-enabled',
      label: 'Display player controls (play, pause, volume) when ads are playing',
      type: 'input-checkbox',
      default: true,
      private: false,
    },
    {
      name: 'vast-video-skip-time',
      label: 'Skip time',
      type: 'input',
      descriptionHTML: 'Set the minimum time spent (in seconds) to allow skip ads. 0 (zero) value will disable skip function',
      private: false,
      default: '8',
    },
    {
      name: 'vast-video-message-skip-countdown',
      label: 'Skip countdown message',
      type: 'input',
      descriptionHTML: 'Message displayed for the countdown to enable skip of the ad (at top right).<br /><em class="fst-italic px-1 text-bg-secondary">{seconds}</em> will be replaced with the number of seconds left to skip the ad',
      private: false,
      default: 'Skip in {seconds}...',
    },
    {
      name: 'vast-video-message-skip',
      label: 'Skip message',
      type: 'input',
      descriptionHTML: 'Message displayed on the clickable button to skip the ad (at top right).',
      private: false,
      default: 'Skip',
    },
    {
      name: 'vast-video-message-remainingTime',
      label: 'Remaining time message',
      type: 'input',
      descriptionHTML: 'Message displayed for the countdown to the end of the ad (at bottom left). <br /><em class="fst-italic px-1 text-bg-secondary">{seconds}</em> will be replaced with the number of seconds left to the end of the ad.<br />If empty, the message will not be displayed.',
      private: false,
      default: 'This ad will end in {seconds}',
    },
  ];

  for (const type of ['upload', 'import-url', 'update']) {
    registerVideoField(vastAdSettings_Title, { type, tab: customTabName })
    pluginVideoSettings.forEach(setting => {
      registerVideoField(setting, { type, tab: customTabName })
    });
  }
}

export {
  register
}
