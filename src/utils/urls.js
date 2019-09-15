const url = {
  login: "/auth/login",
  getCompany: id => `/companies/${id}`,

  createEvent: () => `appointments`,
  getEvents: (schId, start, end) =>
    `/schedules/${schId}/appointments?start_date=${start}&end_date=${end}`,

  getSchedules: () => `/schedules`,
  timeSlotsForDay: (dateInUnix, schId, serviceId) =>
    `/schedules/${schId}/free_slots?date=${dateInUnix}&service_id=${serviceId}`,

  getClients: () => `/clients`,
  updateGroupsForClient: id => `/clients/${id}/update_client_groups`,

  getEmployees: () => `/employees`,

  getServices: () => `/services/`,
  getServicesForEmployee: (employeeId, categories) =>
    `/services/employee/${employeeId}/${categories}`,
  getStaffServices: () => `/services/staff_services`,

  getServiceCategories: () => `/service_categories`,

  getCompanySettings: () => `/company_settings`
};

export default url;
