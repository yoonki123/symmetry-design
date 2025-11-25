import React from 'react';
import styles from './ActionButtons.module.css';

function ActionButtons() {
  const buttons = [
    {
      id: 'reservation',
      label: '예약',
      color: '#FF6B6B',
      icon: '📅'
    },
    {
      id: 'employee',
      label: '임직원 관리',
      color: '#4ECDC4',
      icon: '👥'
    },
    {
      id: 'report',
      label: '리포트',
      color: '#FFE66D',
      icon: '📊'
    }
  ];

  return (
    <section className={styles.actionSection}>
      <div className={styles.buttonGrid}>
        {buttons.map((button) => (
          <button
            key={button.id}
            className={styles.actionButton}
            style={{ '--button-color': button.color }}
          >
            <span className={styles.buttonIcon}>{button.icon}</span>
            <span className={styles.buttonLabel}>{button.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ActionButtons;

