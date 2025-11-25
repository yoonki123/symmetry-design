import React from 'react';
import styles from './MyPage.module.css';

const MyPage = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.button}>
        기본운동
      </a>
      <div className={styles.paging}>
        <button className={styles.pageButton} aria-label="Previous Page">
          <div className={`${styles.icon} ${styles.prevIcon}`} />
        </button>
        <button className={`${styles.pageNumber} ${styles.active}`}>1</button>
        <button className={styles.pageNumber}>2</button>
        <button className={styles.pageNumber}>3</button>
        <button className={styles.pageNumber}>4</button>
        <button className={styles.pageNumber}>5</button>
        <button className={styles.pageNumber}>6</button>
        <span className={styles.ellipsis}>...</span>
        <button className={styles.pageNumber}>99</button>
        <button className={styles.pageButton} aria-label="Next Page">
          <div className={`${styles.icon} ${styles.nextIcon}`} />
        </button>
      </div>
      <div className={styles.download}>
        <div className={styles.icon} />
        <a href="#" className={styles.downloadLink}>
          엑셀 다운로드
        </a>
      </div>
    </div>
  );
};

export default MyPage;
