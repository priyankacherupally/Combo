import api from '../../utils/api.js';
import { ENDPOINTS } from '../../config/apiConfig.js';

export const dashboardService = {
  getSummary: async () => {
    const { data } = await api.get(ENDPOINTS.dashboard.summary);
    return data;
  },

  getStats: async () => {
    const { data } = await api.get(ENDPOINTS.dashboard.stats);
    return data;
  },

  getActivity: async () => {
    const { data } = await api.get(ENDPOINTS.dashboard.activity);
    return data;
  },

  getQuickLinks: async () => {
    const { data } = await api.get(ENDPOINTS.dashboard.quickLinks);
    return data;
  },
};
