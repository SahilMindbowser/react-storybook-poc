import React from "react";
import { Textarea } from "./Textarea";

// Default export defining the component, title, and optional parameters for Storybook
export default {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

// Basic Textarea Example
export const Basic = {
  args: {
    placeholder: "Enter your text here...",
  },
};

// Textarea with Initial Value
export const WithInitialValue = {
  args: {
    placeholder: "Enter your text here...",
    defaultValue: "This is an initial value.",
  },
};

// Disabled Textarea Example
export const Disabled = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
};

// Large Textarea Example
export const Large = {
  args: {
    placeholder: "Enter your text here...",
    className: "min-h-[150px]", // Adjust the height
  },
};
