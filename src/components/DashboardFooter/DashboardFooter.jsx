import React from 'react';
import styles from './DashboardFooter.module.css';

function DashboardFooter() {
  const handleDownload = () => {
    // 다운로드 로직 구현
    console.log('메뉴얼 다운로드');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <button className={styles.downloadButton} onClick={handleDownload}>
          <svg 
            className={styles.downloadIcon} 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 2.5V12.5M10 12.5L6.25 8.75M10 12.5L13.75 8.75M3.75 15H16.25" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.downloadText}>메뉴얼 다운로드</span>
        </button>
      </div>
    </footer>
  );
}

export default DashboardFooter;

