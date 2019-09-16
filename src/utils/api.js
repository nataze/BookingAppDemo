import mockResponse from "../mockApiResponse";

export default class Api {
  static get companyId() {
    return localStorage.getItem("companyId");
  }

  static createBooking(form) {
    form["company_id"] = Api.companyId;
    return Promise.resolve(true);
  }

  static getSchedules() {
    return Promise.resolve(mockResponse.schedules);
  }

  static async getClients() {
    return Promise.resolve(mockResponse.clients);
  }

  static async getEmployees() {
    return Promise.resolve(mockResponse.employees);
  }

  static async getServices() {
    return Promise.resolve(mockResponse.services);
  }

  static async getServicesForEmployee(employeeId, categories) {
    return Promise.resolve(mockResponse.employeeServices);
  }

  static async getServiceCategories() {
    return Promise.resolve(mockResponse.serviceCategories);
  }

  static async fetchFreeSlots(startTime) {
    return Promise.resolve({ data: mockResponse.timeSlots(startTime) });
  }
}
