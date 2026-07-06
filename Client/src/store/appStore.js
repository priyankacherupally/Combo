import { create } from 'zustand';

export const useAppStore = create((set) => ({
  sidebarCollapsed: false,
  toggleSidebar: () =>
    set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),

  quickGuideOpen: false,
  quickGuideKey: null,
  openQuickGuide: (key) => set({ quickGuideOpen: true, quickGuideKey: key }),
  closeQuickGuide: () => set({ quickGuideOpen: false, quickGuideKey: null }),
}));
