export const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिंदी' },
  { value: 'ta', label: 'தமிழ்' },
  { value: 'te', label: 'తెలుగు' },
  { value: 'bn', label: 'বাংলা' },
  { value: 'mr', label: 'मराठी' },
];

export const QUICK_GUIDES = {
  '/dashboard': {
    title: 'Dashboard Overview',
    description: 'Get familiar with the main dashboard — stats, activity feed, and quick links.',
    duration: '2 min',
    category: 'General',
  },
  '/parameter-masters/form': {
    title: 'Parameter Form',
    description: 'Learn how to fill and submit the parameter masters form step by step.',
    duration: '3 min',
    category: 'Master Forms',
  },
  '/parameter-masters/details': {
    title: 'Parameter Details',
    description: 'How to view and manage parameter details and records.',
    duration: '2 min',
    category: 'Master Forms',
  },
  '/quality-control/organoleptic-form': {
    title: 'Organoleptic Form',
    description: 'Step-by-step guide for completing the organoleptic quality check form.',
    duration: '4 min',
    category: 'Quality Control',
  },
  '/quality-control/organoleptic-form/view-data': {
    title: 'Organoleptic View Data',
    description: 'How to view and interpret organoleptic test results.',
    duration: '2 min',
    category: 'Quality Control',
  },
  '/quality-control/review-manager': {
    title: 'Review Manager',
    description: 'Managing and reviewing quality control entries and approvals.',
    duration: '5 min',
    category: 'Quality Control',
  },
};

export const CATEGORY_META = {
  General: { color: '#5189F3', bg: '#e4eeff' },
  'Master Forms': { color: '#10b981', bg: '#d1fae5' },
  'Quality Control': { color: '#f59e0b', bg: '#fef3c7' },
};

export const getGuideByPath = (pathname) => {
  if (QUICK_GUIDES[pathname]) return { ...QUICK_GUIDES[pathname], key: pathname };
  const matchKey = Object.keys(QUICK_GUIDES)
    .sort((a, b) => b.length - a.length)
    .find((k) => pathname.startsWith(k) && k !== '/');
  return matchKey ? { ...QUICK_GUIDES[matchKey], key: matchKey } : null;
};

export const getGuidesByCategory = () => {
  const map = {};
  Object.entries(QUICK_GUIDES).forEach(([key, guide]) => {
    if (!map[guide.category]) map[guide.category] = [];
    map[guide.category].push({ ...guide, key });
  });
  return map;
};
