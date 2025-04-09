const pluginSettings = [
  // PREROLL SETTINGS
  {
    name: 'vast-preroll-title',
    type: 'html',
    html: '<hr /><h3>Ads before videos</h3>',
  },
  {
    name: 'vast-preroll-enabled',
    label: 'Enable video ads before videos',
    type: 'input-checkbox',
    default: true,
    private: false,
  },
  {
    name: 'vast-preroll-url',
    label: 'Vast URL',
    type: 'input',
    descriptionHTML: 'The vast.xml URL for ads before videos',
    private: false,
  },

  // MIDROLL SETTINGS
  {
    name: 'vast-midroll-title',
    type: 'html',
    html: '<br /><h3>Ads in middle of videos</h3>',
  },
  {
    name: 'vast-midroll-enabled',
    label: 'Enable video ads in middle of videos',
    type: 'input-checkbox',
    default: false,
    private: false,
  },
  {
    name: 'vast-midroll-url',
    label: 'Vast URL',
    type: 'input',
    descriptionHTML: 'The vast.xml URL for ads in middle of videos',
    private: false,
  },
  {
    name: 'vast-midroll-offset',
    label: 'Offset',
    type: 'input',
    descriptionHTML: 'Offset in seconds or percentage of the video duration<br />(eg. 10 to start the ad at second 10, or 50% to start the ad at 50% of the video)',
    private: false,
    default: '25%',
  },

  // POSTROLL SETTINGS
  {
    name: 'vast-postroll-title',
    type: 'html',
    html: '<br /><h3>Ads after videos</h3>',
  },
  {
    name: 'vast-postroll-enabled',
    label: 'Enable video ads after videos',
    type: 'input-checkbox',
    default: false,
    private: false,
  },
  {
    name: 'vast-postroll-url',
    label: 'Vast URL',
    type: 'input',
    descriptionHTML: 'The vast.xml URL for ads before videos',
    private: false,
  },

  // OTHER SETTINGS
  {
    name: 'vast-other-title',
    type: 'html',
    html: `<br /><h3>Other settings</h3>`,
  },
  {
    name: 'vast-allow-define-config-per-video',
    label: 'Allow define config per video',
    type: 'input-checkbox',
    default: false,
    private: false,
  },
  {
    name: 'vast-allow-config-per-video-only-admins',
    label: 'If before option is enabled, only Admin users can define config per video',
    type: 'input-checkbox',
    default: true,
    private: false,
  },
  {
    name: 'vast-embeded-enabled',
    label: 'Enable video ads in embedded players',
    type: 'input-checkbox',
    default: true,
    private: false,
  },
  {
    name: 'vast-player-controls-enabled',
    label: 'Display player controls (play, pause, volume) when ads are playing',
    type: 'input-checkbox',
    default: true,
    private: false,
  },
  {
    name: 'vast-skip-time',
    label: 'Skip time',
    type: 'input',
    descriptionHTML: 'Set the minimum time spent (in seconds) to allow skip ads. 0 (zero) value will disable skip function',
    private: false,
    default: '8',
  },
  {
    name: 'vast-message-skip-countdown',
    label: 'Skip countdown message',
    type: 'input',
    descriptionHTML: 'Message displayed for the countdown to enable skip of the ad (at top right).<br /><em class="fst-italic px-1 text-bg-secondary">{seconds}</em> will be replaced with the number of seconds left to skip the ad',
    private: false,
    default: 'Skip in {seconds}...',
  },
  {
    name: 'vast-message-skip',
    label: 'Skip message',
    type: 'input',
    descriptionHTML: 'Message displayed on the clickable button to skip the ad (at top right).',
    private: false,
    default: 'Skip',
  },
  {
    name: 'vast-message-remainingTime',
    label: 'Remaining time message',
    type: 'input',
    descriptionHTML: 'Message displayed for the countdown to the end of the ad (at bottom left). <br /><em class="fst-italic px-1 text-bg-secondary">{seconds}</em> will be replaced with the number of seconds left to the end of the ad.<br />If empty, the message will not be displayed.',
    private: false,
    default: 'This ad will end in {seconds}',
  }
];

module.exports = pluginSettings;
