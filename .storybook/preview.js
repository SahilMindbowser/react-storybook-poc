import "../src/index.css";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
  minimumSupported: {
    name: "Minimum Supported",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
