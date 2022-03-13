import type { StorybookConfig } from "@storybook/core-common";
import type { Configuration } from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};

module.exports = config;
