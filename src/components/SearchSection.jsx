import React from 'react';
import styles from './SearchSection.module.css';

function SearchSection() {
  return (
    <div className={styles.searchSection} data-node-id="822:19240">
      <div className={styles.searchContent}>
        <div className={styles.sysInput}>
          <p>처리완료일</p>
          <div className={styles.icons} />
        </div>
        <div className={styles.sysInput}>
          <p>직접 입력</p>
          <div className={styles.icons} />
        </div>
        <div className={styles.sysInput}>
          <p>2025.01.09</p>
          <div className={styles.icons} />
        </div>
        <p className={styles.dash}>-</p>
        <div className={styles.sysInput}>
          <p>2025.01.09</p>
          <div className={styles.icons} />
        </div>
        <div className={styles.sysInput}>
          <p>전체</p>
          <div className={styles.icons} />
        </div>
        <div className={styles.sysInput}>
          <p>회사명</p>
          <div className={styles.icons} />
        </div>
        <div className={`${styles.sysInput} ${styles.searchInputField}`}>
          <div className={styles.icons} />
        </div>
        <div className={styles.btnBtnSurface}>
          <p>검색</p>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
