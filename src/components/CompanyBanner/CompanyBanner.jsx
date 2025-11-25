import React from 'react';
import styles from './CompanyBanner.module.css';

function CompanyBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.companyName}>(주) 현대자동차</h1>
      </div>
    </section>
  );
}

export default CompanyBanner;

