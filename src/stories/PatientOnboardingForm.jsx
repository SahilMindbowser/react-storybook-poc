import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./Select";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Checkbox } from "./Checkbox";
import { Label } from "./Label";
import { Button } from "./Button";

const PatientOnboardingForm = () => {
  return (
    <form className="space-y-4 max-w-lg w-[500px] mx-auto p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Patient Onboarding Form</h2>

      {/* Name Field */}
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </Label>
        <Input id="name" type="text" placeholder="Enter your full name" />
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </Label>
        <Input id="email" type="email" placeholder="Enter your email address" />
      </div>

      {/* Contact Field */}
      <div>
        <Label htmlFor="contact" className="block text-sm font-medium mb-1">
          Contact
        </Label>
        <Input id="contact" type="number" placeholder="Enter your contact" />
      </div>

      {/* Gender Field */}
      <div>
        <Label className="block text-sm font-medium mb-1">Gender</Label>
        <RadioGroup defaultValue="male">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male" className="text-sm">
              Male
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female" className="text-sm">
              Female
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other" className="text-sm">
              Other
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Date of Birth Field */}
      <div>
        <Label htmlFor="dob" className="block text-sm font-medium mb-1">
          Date of Birth
        </Label>
        <Input id="dob" type="date" />
      </div>

      {/* Medical History Field */}
      <div>
        <Label
          htmlFor="medicalHistory"
          className="block text-sm font-medium mb-1"
        >
          Medical History
        </Label>
        <Textarea
          id="medicalHistory"
          placeholder="Briefly describe your medical history"
        />
      </div>

      {/* Preferred Contact Method */}
      <div>
        <Label className="block text-sm font-medium mb-1">
          Preferred Contact Method
        </Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a contact method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="sms">SMS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-sm">
          I agree to the{" "}
          <a href="#" className="text-blue-500 underline">
            terms and conditions
          </a>
        </Label>
      </div>

      {/* Submit Button */}
      <Button variant="default" className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default PatientOnboardingForm;
