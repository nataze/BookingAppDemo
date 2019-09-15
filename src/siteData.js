// TODO: to be moved to store

export const events = [];

export const statusList = [
  "scheduled",
  "confirmed",
  "cancelled",
  "rescheduled",
  "late",
  "reminded",
  "completed"
];

export const companySetting = {
  eventDuration: 15,
  appointmentDuration: 15,
  dailyStartTime: "9:00 AM",
  dailyEndTime: "5:00 PM",
  breakStartTime: "1:00 PM",
  breakEndTime: "1:30 PM",
  weeklyAvailability: "monday tuesday wednesday thursday friday",
  scheduleOwnerType: "Employee"
};

export const serviceCategories = [
  "Barber Services",
  "Extensions",
  "Locks",
  "Stylist Services"
];

export const employees = [
  {
    id: 1,
    name: "Neil"
  },
  {
    id: 2,
    name: "R.J."
  },
  {
    id: 3,
    name: "Caneil"
  },
  {
    id: 4,
    name: "Moureen"
  },
  {
    id: 5,
    name: "Misty"
  },
  {
    id: 6,
    name: "Shianne"
  }
];

export const staffServices = {
  "Afro cut": [1, 2],
  "Beard Trim": [1, 2],
  "Taper cut": [1, 2],
  "Corn Rows": [3, 4],
  "Remove Tracks": [3, 4, 5],
  "Dread Lock Consult": [1, 2, 3, 4, 5, 6],
  "Sister Lock Consult": [1, 2, 3, 4, 5, 6],
  "Colour Consult": [1, 2, 3, 4, 5, 6],
  Texturizer: [3, 4, 5]
};

export const services = [
  {
    id: 1,
    type: "Barber Services",
    price: 25,
    name: "Afro cut"
  },
  {
    id: 2,
    type: "Barber Services",
    price: 25,
    name: "Beard Trim"
  },
  {
    id: 3,
    type: "Barber Services",
    price: 25,
    name: "Taper cut"
  },
  {
    id: 4,
    type: "Extensions",
    price: 25,
    name: "Corn Rows"
  },
  {
    id: 5,
    type: "Extensions",
    price: 25,
    name: "Remove Tracks"
  },
  {
    id: 6,
    type: "Locks",
    price: 25,
    name: "Dread Lock Consult"
  },
  {
    id: 7,
    type: "Locks",
    price: 25,
    name: "Sister Lock Consult"
  },
  {
    id: 8,
    type: "Stylist Services",
    price: 25,
    name: "Colour Consult"
  },
  {
    id: 9,
    type: "Stylist Services",
    price: 25,
    name: "Texturizer"
  }
];

export const timezonesList = {
  "International Date Line West": "Etc/GMT+12",
  "Midway Island": "Pacific/Midway",
  "American Samoa": "Pacific/Pago_Pago",
  Hawaii: "Pacific/Honolulu",
  Alaska: "America/Juneau",
  "Pacific Time (US & Canada)": "America/Los_Angeles",
  Tijuana: "America/Tijuana",
  "Mountain Time (US & Canada)": "America/Denver",
  Arizona: "America/Phoenix",
  Chihuahua: "America/Chihuahua",
  Mazatlan: "America/Mazatlan",
  "Central Time (US & Canada)": "America/Chicago",
  Saskatchewan: "America/Regina",
  Guadalajara: "America/Mexico_City",
  "Mexico City": "America/Mexico_City",
  Monterrey: "America/Monterrey",
  "Central America": "America/Guatemala",
  "Eastern Time (US & Canada)": "America/New_York",
  "Indiana (East)": "America/Indiana/Indianapolis",
  Bogota: "America/Bogota",
  Lima: "America/Lima",
  Quito: "America/Lima",
  "Atlantic Time (Canada)": "America/Halifax",
  Caracas: "America/Caracas",
  "La Paz": "America/La_Paz",
  Santiago: "America/Santiago",
  Newfoundland: "America/St_Johns",
  Brasilia: "America/Sao_Paulo",
  "Buenos Aires": "America/Argentina/Buenos_Aires",
  Montevideo: "America/Montevideo",
  Georgetown: "America/Guyana",
  "Puerto Rico": "America/Puerto_Rico",
  Greenland: "America/Godthab",
  "Mid-Atlantic": "Atlantic/South_Georgia",
  Azores: "Atlantic/Azores",
  "Cape Verde Is.": "Atlantic/Cape_Verde",
  Dublin: "Europe/Dublin",
  Edinburgh: "Europe/London",
  Lisbon: "Europe/Lisbon",
  London: "Europe/London",
  Casablanca: "Africa/Casablanca",
  Monrovia: "Africa/Monrovia",
  UTC: "Etc/UTC",
  Belgrade: "Europe/Belgrade",
  Bratislava: "Europe/Bratislava",
  Budapest: "Europe/Budapest",
  Ljubljana: "Europe/Ljubljana",
  Prague: "Europe/Prague",
  Sarajevo: "Europe/Sarajevo",
  Skopje: "Europe/Skopje",
  Warsaw: "Europe/Warsaw",
  Zagreb: "Europe/Zagreb",
  Brussels: "Europe/Brussels",
  Copenhagen: "Europe/Copenhagen",
  Madrid: "Europe/Madrid",
  Paris: "Europe/Paris",
  Amsterdam: "Europe/Amsterdam",
  Berlin: "Europe/Berlin",
  Bern: "Europe/Zurich",
  Zurich: "Europe/Zurich",
  Rome: "Europe/Rome",
  Stockholm: "Europe/Stockholm",
  Vienna: "Europe/Vienna",
  "West Central Africa": "Africa/Algiers",
  Bucharest: "Europe/Bucharest",
  Cairo: "Africa/Cairo",
  Helsinki: "Europe/Helsinki",
  Kyiv: "Europe/Kiev",
  Riga: "Europe/Riga",
  Sofia: "Europe/Sofia",
  Tallinn: "Europe/Tallinn",
  Vilnius: "Europe/Vilnius",
  Athens: "Europe/Athens",
  Istanbul: "Europe/Istanbul",
  Minsk: "Europe/Minsk",
  Jerusalem: "Asia/Jerusalem",
  Harare: "Africa/Harare",
  Pretoria: "Africa/Johannesburg",
  Kaliningrad: "Europe/Kaliningrad",
  Moscow: "Europe/Moscow",
  "St. Petersburg": "Europe/Moscow",
  Volgograd: "Europe/Volgograd",
  Samara: "Europe/Samara",
  Kuwait: "Asia/Kuwait",
  Riyadh: "Asia/Riyadh",
  Nairobi: "Africa/Nairobi",
  Baghdad: "Asia/Baghdad",
  Tehran: "Asia/Tehran",
  "Abu Dhabi": "Asia/Muscat",
  Muscat: "Asia/Muscat",
  Baku: "Asia/Baku",
  Tbilisi: "Asia/Tbilisi",
  Yerevan: "Asia/Yerevan",
  Kabul: "Asia/Kabul",
  Ekaterinburg: "Asia/Yekaterinburg",
  Islamabad: "Asia/Karachi",
  Karachi: "Asia/Karachi",
  Tashkent: "Asia/Tashkent",
  Chennai: "Asia/Kolkata",
  Kolkata: "Asia/Kolkata",
  Mumbai: "Asia/Kolkata",
  "New Delhi": "Asia/Kolkata",
  Kathmandu: "Asia/Kathmandu",
  Astana: "Asia/Dhaka",
  Dhaka: "Asia/Dhaka",
  "Sri Jayawardenepura": "Asia/Colombo",
  Almaty: "Asia/Almaty",
  Novosibirsk: "Asia/Novosibirsk",
  Rangoon: "Asia/Rangoon",
  Bangkok: "Asia/Bangkok",
  Hanoi: "Asia/Bangkok",
  Jakarta: "Asia/Jakarta",
  Krasnoyarsk: "Asia/Krasnoyarsk",
  Beijing: "Asia/Shanghai",
  Chongqing: "Asia/Chongqing",
  "Hong Kong": "Asia/Hong_Kong",
  Urumqi: "Asia/Urumqi",
  "Kuala Lumpur": "Asia/Kuala_Lumpur",
  Singapore: "Asia/Singapore",
  Taipei: "Asia/Taipei",
  Perth: "Australia/Perth",
  Irkutsk: "Asia/Irkutsk",
  Ulaanbaatar: "Asia/Ulaanbaatar",
  Seoul: "Asia/Seoul",
  Osaka: "Asia/Tokyo",
  Sapporo: "Asia/Tokyo",
  Tokyo: "Asia/Tokyo",
  Yakutsk: "Asia/Yakutsk",
  Darwin: "Australia/Darwin",
  Adelaide: "Australia/Adelaide",
  Canberra: "Australia/Melbourne",
  Melbourne: "Australia/Melbourne",
  Sydney: "Australia/Sydney",
  Brisbane: "Australia/Brisbane",
  Hobart: "Australia/Hobart",
  Vladivostok: "Asia/Vladivostok",
  Guam: "Pacific/Guam",
  "Port Moresby": "Pacific/Port_Moresby",
  Magadan: "Asia/Magadan",
  Srednekolymsk: "Asia/Srednekolymsk",
  "Solomon Is.": "Pacific/Guadalcanal",
  "New Caledonia": "Pacific/Noumea",
  Fiji: "Pacific/Fiji",
  Kamchatka: "Asia/Kamchatka",
  "Marshall Is.": "Pacific/Majuro",
  Auckland: "Pacific/Auckland",
  Wellington: "Pacific/Auckland",
  "Nuku'alofa": "Pacific/Tongatapu",
  "Tokelau Is.": "Pacific/Fakaofo",
  "Chatham Is.": "Pacific/Chatham",
  Samoa: "Pacific/Apia"
};
