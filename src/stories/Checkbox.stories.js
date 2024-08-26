import React from "react";
import { Checkbox } from "./Checkbox";

// Default export defining the component, title, and optional parameters for Storybook
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Basic Checkbox Example
export const Basic = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="basic-checkbox" />
    <label htmlFor="basic-checkbox" className="text-sm font-medium">
      Basic Checkbox
    </label>
  </div>
);

// Checked Checkbox Example
export const Checked = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="checked-checkbox" defaultChecked />
    <label htmlFor="checked-checkbox" className="text-sm font-medium">
      Checked Checkbox
    </label>
  </div>
);

// Disabled Checkbox Example
export const Disabled = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-checkbox" disabled />
    <label htmlFor="disabled-checkbox" className="text-sm font-medium">
      Disabled Checkbox
    </label>
  </div>
);

// Checkbox with Custom Styling Example
export const CustomStyling = () => (
  <div className="flex items-center space-x-2">
    <Checkbox
      id="custom-checkbox"
      className="border-red-500 data-[state=checked]:bg-red-500"
    />
    <label
      htmlFor="custom-checkbox"
      className="text-sm font-medium text-red-500"
    >
      Custom Styled Checkbox
    </label>
  </div>
);
