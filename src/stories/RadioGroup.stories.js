import React from "react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

// Default export defining the component, title, and optional parameters for Storybook
export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Basic RadioGroup Example
export const Basic = () => (
  <RadioGroup defaultValue="option1" aria-label="Select an option">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option1" id="option1" />
      <label htmlFor="option1" className="text-sm font-medium leading-none">
        Option 1
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option2" id="option2" />
      <label htmlFor="option2" className="text-sm font-medium leading-none">
        Option 2
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option3" id="option3" />
      <label htmlFor="option3" className="text-sm font-medium leading-none">
        Option 3
      </label>
    </div>
  </RadioGroup>
);

// RadioGroup with a Disabled Option
export const WithDisabledOption = () => (
  <RadioGroup defaultValue="option1" aria-label="Select an option">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option1" id="option1" />
      <label htmlFor="option1" className="text-sm font-medium leading-none">
        Option 1
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option2" id="option2" disabled />
      <label htmlFor="option2" className="text-sm font-medium leading-none">
        Option 2 (Disabled)
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option3" id="option3" />
      <label htmlFor="option3" className="text-sm font-medium leading-none">
        Option 3
      </label>
    </div>
  </RadioGroup>
);

// RadioGroup with Custom Styling
export const CustomStyling = () => (
  <RadioGroup defaultValue="option1" aria-label="Select an option">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option1" id="option1" className="border-red-500" />
      <label
        htmlFor="option1"
        className="text-sm font-medium leading-none text-red-500"
      >
        Custom Option 1
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value="option2"
        id="option2"
        className="border-blue-500"
      />
      <label
        htmlFor="option2"
        className="text-sm font-medium leading-none text-blue-500"
      >
        Custom Option 2
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value="option3"
        id="option3"
        className="border-green-500"
      />
      <label
        htmlFor="option3"
        className="text-sm font-medium leading-none text-green-500"
      >
        Custom Option 3
      </label>
    </div>
  </RadioGroup>
);
