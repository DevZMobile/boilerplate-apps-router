import { Preview } from "@storybook/nextjs-vite";
import GlobalStyles from "../src/styles/global";

export const decorators: Preview["decorators"] = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
