import React from 'react';
import styles from './TabSection.module.css';

function TabSection() {
  return (
    <div className={styles.btnTab} data-node-id="822:19237">
      <div className={`${styles.btnTabCommon} ${styles.active}`}>
        <div className={styles.layer}>
          <p>기업문의</p>
        </div>
      </div>
      <a className={styles.btnTabCommon}>
        <div className={styles.layer}>
          <p>개인문의</p>
        </div>
      </a>
    </div>
  );
}

export default TabSection;
