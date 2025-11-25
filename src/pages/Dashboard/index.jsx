import DashboardHeader from '../../components/DashboardHeader';
import CompanySection from '../../components/CompanySection';
import ActionButtons from '../../components/ActionButtons';
import AnnouncementList from '../../components/AnnouncementList';
import DashboardFooter from '../../components/DashboardFooter';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DashboardHeader />

      <main className={styles.main}>
        <CompanySection />
        <ActionButtons />
        <AnnouncementList />
      </main>

      <DashboardFooter />
    </div>
  );
}
