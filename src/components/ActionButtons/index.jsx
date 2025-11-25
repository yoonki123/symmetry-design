import styles from './ActionButtons.module.css';

export default function ActionButtons() {
  const buttons = [
    {
      id: 1,
      title: '예약',
      description: '예약 관리',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z" fill="currentColor" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #354ad9 0%, #5a6eeb 100%)',
    },
    {
      id: 2,
      title: '임직원관리',
      description: '직원 정보 관리',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
    },
    {
      id: 3,
      title: '리포트',
      description: '통계 및 분석',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor" />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.buttonGrid}>
          {buttons.map((button) => (
            <button
              key={button.id}
              className={styles.actionButton}
              style={{ background: button.gradient }}
            >
              <div className={styles.iconWrapper}>
                {button.icon}
              </div>
              <h3 className={styles.buttonTitle}>{button.title}</h3>
              <p className={styles.buttonDescription}>{button.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
