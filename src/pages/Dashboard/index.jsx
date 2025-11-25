import React from 'react';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import CompanyBanner from '../../components/CompanyBanner/CompanyBanner';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import NoticeBoard from '../../components/NoticeBoard/NoticeBoard';
import DashboardFooter from '../../components/DashboardFooter/DashboardFooter';
import styles from './Dashboard.module.css';


export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader />
      <main className={styles.main}>
        <CompanyBanner />
        <ActionButtons />
        <NoticeBoard />
        <DashboardFooter />
      </main>
    </div>
  );
}
