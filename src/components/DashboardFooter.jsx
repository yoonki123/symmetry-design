import React from 'react';
import styles from './DashboardFooter.module.css';

function DashboardFooter() {
  return (
    <footer className={styles.footer}>
      <button className={styles.downloadButton}>
        <svg 
          className={styles.downloadIcon}
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M10 13V3M10 13L6 9M10 13L14 9M3 16H17" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.downloadText}>메뉴얼 다운로드</span>
      </button>
    </footer>
  );
}

export default DashboardFooter;

