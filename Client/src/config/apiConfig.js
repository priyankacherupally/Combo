export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
  },
  dashboard: {
    summary: '/dashboard',
    stats: '/dashboard/stats',
    activity: '/dashboard/activity',
    quickLinks: '/dashboard/quick-links',
  },
};
