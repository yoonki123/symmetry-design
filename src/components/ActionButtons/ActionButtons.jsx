import React from 'react';
import styles from './ActionButtons.module.css';

function ActionButtons() {
  const buttons = [
    {
      id: 'reservation',
      label: '예약',
      gradient: 'linear-gradient(135deg, #354ad9 0%, #5b6de8 100%)',
    },
    {
      id: 'employee',
      label: '임직원 관리',
      gradient: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)',
    },
    {
      id: 'report',
      label: '리포트',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
    },
  ];

  return (
    <section className={styles.actionSection}>
      <div className={styles.actionContent}>
        <div className={styles.buttonGrid}>
          {buttons.map((button) => (
            <button
              key={button.id}
              className={styles.actionButton}
              style={{ background: button.gradient }}
              aria-label={button.label}
            >
              <span className={styles.buttonText}>{button.label}</span>
              <div className={styles.buttonGlow} style={{ background: button.gradient }}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActionButtons;

