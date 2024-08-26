import React from "react";
import { Label } from "./Label";

// Default export defining the component, title, and optional parameters for Storybook
export default {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
    },
  },
  tags: ["autodocs"],
};

// Story for a default label
export const Default = {
  args: {
    children: "Default Label",
  },
};

// Story for a label with custom class
export const CustomClass = {
  args: {
    children: "Custom Class Label",
    className: "text-blue-500", // Example of custom class
  },
};
