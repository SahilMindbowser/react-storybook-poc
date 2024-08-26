import { fn } from "@storybook/test";
import { Button } from "./Button";
import { Mail } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    variant: "default",
    children: "Primary Button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Destructive = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
};

export const Ghost = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const ButtonWithIcon = {
  args: {
    variant: "default",
    children: "Search",
  },
  render: (args) => (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  ),
};
