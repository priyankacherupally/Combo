import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import Sidebar from './Sidebar/Sidebar.js';
import QuickGuideDrawer from '../features/quickGuide/QuickGuideDrawer/index.js';
import { useAppStore } from '../store/appStore.js';
import { QUICK_GUIDES } from '../features/quickGuide/quickGuideConfig.js';
import styles from './MainLayout.module.scss';

export default function MainLayout() {
  const { quickGuideOpen, quickGuideKey, closeQuickGuide } = useAppStore();
  const guide = quickGuideKey ? { ...QUICK_GUIDES[quickGuideKey], key: quickGuideKey } : null;

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
      <QuickGuideDrawer open={quickGuideOpen} onClose={closeQuickGuide} guide={guide} />
    </div>
  );
}
