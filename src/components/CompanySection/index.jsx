import styles from './CompanySection.module.css';

export default function CompanySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.companyName}>
          <span className={styles.highlight}>우리</span> 회사
        </h1>
        <p className={styles.subtitle}>관리 시스템에 오신 것을 환영합니다</p>
      </div>
    </section>
  );
}
