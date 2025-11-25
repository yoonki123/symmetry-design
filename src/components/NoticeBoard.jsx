import React from 'react';
import styles from './NoticeBoard.module.css';

function NoticeBoard() {
  const notices = [
    {
      id: 1,
      category: '[운영]',
      title: 'symmetry v.0.4 업데이트 안내',
      date: '2025-03-02',
      isNew: true
    },
    {
      id: 2,
      category: '[시스템]',
      title: '정기 점검 안내',
      date: '2025-03-01',
      isNew: false
    },
    {
      id: 3,
      category: '[공지]',
      title: '신규 기능 추가 안내',
      date: '2025-02-28',
      isNew: false
    },
    {
      id: 4,
      category: '[업데이트]',
      title: '보안 패치 적용 완료',
      date: '2025-02-25',
      isNew: false
    },
    {
      id: 5,
      category: '[안내]',
      title: '서비스 이용 가이드',
      date: '2025-02-20',
      isNew: false
    }
  ];

  return (
    <section className={styles.noticeSection}>
      <div className={styles.noticeContainer}>
        <div className={styles.noticeHeader}>
          <h2 className={styles.noticeTitle}>공지사항</h2>
          <button className={styles.viewAllButton} aria-label="전체 보기">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <ul className={styles.noticeList}>
          {notices.map((notice) => (
            <li key={notice.id} className={styles.noticeItem}>
              <div className={styles.noticeContent}>
                <span className={styles.noticeCategory}>{notice.category}</span>
                <span className={styles.noticeText}>{notice.title}</span>
                {notice.isNew && (
                  <span className={styles.newBadge}>New</span>
                )}
              </div>
              <span className={styles.noticeDate}>{notice.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NoticeBoard;

