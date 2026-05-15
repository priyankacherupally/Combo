import { Row, Col } from 'antd';

import Hero from '../features/dashboard/Hero/index.js';
import StatsGrid from '../features/dashboard/StatsGrid/index.js';
import ActivityFeed from '../features/dashboard/ActivityFeed/index.js';
import QuickLinks from '../features/dashboard/QuickLinks/index.js';
import styles from './DashboardPage.module.scss';

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <Hero />

      <StatsGrid />

      <Row gutter={[20, 20]} className={styles.bottomRow}>
        <Col xs={24} lg={16}>
          <ActivityFeed />
        </Col>
        <Col xs={24} lg={8}>
          <QuickLinks />
        </Col>
      </Row>
    </div>
  );
}
