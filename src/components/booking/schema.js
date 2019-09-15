const bookingFormSchema = {
  1: [
    {
      fieldType: "text",
      isRequired: false,
      name: "id",
      isHidden: true
    },
    {
      fieldType: "text",
      isRequired: true,
      name: "name",
      labelName: "Full Name"
    },
    {
      fieldType: "text",
      isRequired: true,
      name: "phoneNumber",
      labelName: "Phone Number"
    },
    {
      fieldType: "text",
      isRequired: true,
      name: "email",
      labelName: "Email Address"
    },
    {
      fieldType: "multipleCheckbox",
      isRequired: true,
      name: "reminderPreferences",
      checkboxOptions: ["call", "sms", "email"],
      labelName: "Reminder Preferences",
      checkboxLabels: ["Phone call", "Text", "Email"]
    }
  ],
  2: [
    {
      fieldType: "datetime",
      isRequired: true,
      name: "startTime",
      labelName: "Time"
    }
  ]
};

export default bookingFormSchema;
