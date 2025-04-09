// client/video-edit-client-plugin.js
function register({ registerHook, registerVideoField, peertubeHelpers }) {
  const customTabName = "plugin-settings";
  const vastAdSettings_Title = {
    name: "vast-video-settings-banner",
    type: "html",
    html: `
      <div class="content-col text-center" id="video-plugin-form-tab">
        <div class="callout callout-orange">
          <span class="fw fs-3">Customize VAST ad settings for this video</span>
          <br />
          <span class="fst-italic text-muted">The settings you define here will override the plugin's global settings...</span>
        </div>
      </div>
    `
  };
  const pluginVideoSettings = [
    {
      name: "vast-video-preroll-title",
      type: "html",
      html: "<h3>Ads before video</h3>"
    },
    {
      name: "vast-video-preroll-enabled",
      label: "Enable ads before video start",
      type: "input-checkbox",
      default: false,
      private: false
    },
    {
      name: "vast-video-preroll-url",
      label: "Vast URL",
      type: "input",
      descriptionHTML: "The vast.xml URL for ads before video",
      private: false,
      hidden: ({ formValues }) => !formValues.pluginData["vast-video-preroll-enabled"]
    },
    {
      name: "vast-video-midroll-title",
      type: "html",
      html: "<br /><h3>Ads in middle of video</h3>"
    },
    {
      name: "vast-video-midroll-enabled",
      label: "Enable ads in middle of video",
      type: "input-checkbox",
      default: false,
      private: false
    },
    {
      name: "vast-video-midroll-url",
      label: "Vast URL",
      type: "input",
      descriptionHTML: "The vast.xml URL for ads in middle of video",
      private: false,
      hidden: ({ formValues }) => !formValues.pluginData["vast-video-midroll-enabled"]
    },
    {
      name: "vast-video-midroll-offset",
      label: "Offset",
      type: "input",
      descriptionHTML: "Offset in seconds or percentage of the video duration<br />(eg. 10 to start the ad at second 10, or 50% to start the ad at 50% of the video)",
      private: false,
      default: "25%",
      hidden: ({ formValues }) => !formValues.pluginData["vast-video-midroll-enabled"]
    },
    {
      name: "vast-video-postroll-title",
      type: "html",
      html: "<br /><h3>Ads after video</h3>"
    },
    {
      name: "vast-video-postroll-enabled",
      label: "Enable ads after video",
      type: "input-checkbox",
      default: false,
      private: false
    },
    {
      name: "vast-video-postroll-url",
      label: "Vast URL",
      type: "input",
      descriptionHTML: "The vast.xml URL for ads before video",
      private: false,
      hidden: ({ formValues }) => !formValues.pluginData["vast-video-postroll-enabled"]
    }
  ];
  for (const type of ["upload", "import-url", "update"]) {
    registerVideoField(vastAdSettings_Title, { type, tab: customTabName });
    pluginVideoSettings.forEach((setting) => {
      registerVideoField(setting, { type, tab: customTabName });
    });
  }
}
export {
  register
};
