import React from "react";
import { Input } from "./Input";

// Default export defining the component, title, and optional parameters for Storybook
export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "url"],
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
};

// Story for a basic text input
export const Text = {
  args: {
    type: "text",
    placeholder: "Enter your text...",
  },
};

// Story for an email input
export const Email = {
  args: {
    type: "email",
    placeholder: "Enter your email...",
  },
};

// Story for a password input
export const Password = {
  args: {
    type: "password",
    placeholder: "Enter your password...",
  },
};

// Story for a search input
export const Search = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
};

// Story for a disabled input
export const Disabled = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
  },
};
