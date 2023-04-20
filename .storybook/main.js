const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  stories: ["../libs/components/src/**/*.stories.mdx", "../libs/components/src/**/*.stories.@(js|jsx|ts|tsx)", "../apps/web/src/**/*.stories.mdx", "../apps/web/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-a11y", "storybook-addon-designs", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  webpackFinal: async (config, {
    configType
  }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  docs: {
    autodocs: true
  }
};