import React from "react";
import PatientOnboardingForm from "./PatientOnboardingForm";

// Default export for the form story
export default {
  title: "Forms/PatientOnboardingForm",
  component: PatientOnboardingForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Story combining all components into the form
export const OnboardingForm = () => <PatientOnboardingForm />;
