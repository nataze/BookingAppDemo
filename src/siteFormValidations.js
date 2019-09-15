export const bookingFormValidations = {
  name: ["required"],
  phoneNumber: ["required", "phoneNumber"],
  email: ["required", "email"],
  startTime: ["required", "integer"],
  serviceId: ["required"]
};
