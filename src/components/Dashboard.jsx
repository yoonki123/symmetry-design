import React from 'react';
import styles from './Dashboard.module.css';
import DashboardHeader from './DashboardHeader';
import CompanyBanner from './CompanyBanner';
import ActionButtons from './ActionButtons';
import NoticeBoard from './NoticeBoard';
import DashboardFooter from './DashboardFooter';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader />
      <main className={styles.main}>
        <CompanyBanner />
        <ActionButtons />
        <NoticeBoard />
      </main>
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;

