import styles from './DashboardFooter.module.css';

export default function DashboardFooter() {
  const handleDownload = () => {
    // 실제 다운로드 로직은 여기에 구현
    console.log('매뉴얼 다운로드');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.text}>시스템 사용에 도움이 필요하신가요?</p>
            <p className={styles.subtext}>매뉴얼을 다운로드하여 자세한 사용 방법을 확인하세요.</p>
          </div>

          <button className={styles.downloadButton} onClick={handleDownload}>
            <svg
              className={styles.downloadIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z"
                fill="currentColor"
              />
            </svg>
            <span>매뉴얼 다운로드</span>
          </button>
        </div>

        <div className={styles.copyright}>
          <p>© 2024 우리 회사. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
