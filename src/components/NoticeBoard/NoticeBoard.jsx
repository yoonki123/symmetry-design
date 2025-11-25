import React from 'react';
import styles from './NoticeBoard.module.css';

function NoticeBoard() {
  const notices = [
    {
      id: 1,
      category: '[운영]',
      title: 'symmetry v.0.4 업데이트 안내',
      isNew: true,
      date: '2025-03-02',
    },
    {
      id: 2,
      category: '[시스템]',
      title: '정기 점검 안내',
      isNew: false,
      date: '2025-02-28',
    },
    {
      id: 3,
      category: '[공지]',
      title: '신규 기능 추가 안내',
      isNew: false,
      date: '2025-02-25',
    },
    {
      id: 4,
      category: '[이벤트]',
      title: '3월 프로모션 안내',
      isNew: true,
      date: '2025-02-20',
    },
    {
      id: 5,
      category: '[업데이트]',
      title: '보안 패치 적용 완료',
      isNew: false,
      date: '2025-02-18',
    },
  ];

  return (
    <section className={styles.noticeSection}>
      <div className={styles.noticeContent}>
        <div className={styles.noticeHeader}>
          <h2 className={styles.noticeTitle}>공지사항</h2>
          <button className={styles.viewAllButton} aria-label="전체 보기">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className={styles.noticeList}>
          {notices.map((notice) => (
            <div key={notice.id} className={styles.noticeItem}>
              <div className={styles.noticeLeft}>
                <span className={styles.noticeCategory}>{notice.category}</span>
                <span className={styles.noticeText}>{notice.title}</span>
                {notice.isNew && (
                  <span className={styles.newBadge}>New</span>
                )}
              </div>
              <span className={styles.noticeDate}>{notice.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NoticeBoard;

