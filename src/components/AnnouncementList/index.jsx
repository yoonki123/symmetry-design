import styles from './AnnouncementList.module.css';

export default function AnnouncementList() {
  const announcements = [
    {
      id: 1,
      title: '2024년 1분기 전체 회의 안내',
      date: '2024-11-20',
      isNew: true,
    },
    {
      id: 2,
      title: '시스템 정기 점검 일정 공지',
      date: '2024-11-18',
      isNew: true,
    },
    {
      id: 3,
      title: '연말 휴가 신청 기간 안내',
      date: '2024-11-15',
      isNew: false,
    },
    {
      id: 4,
      title: '보안 정책 업데이트 안내',
      date: '2024-11-12',
      isNew: false,
    },
    {
      id: 5,
      title: '신규 복지 제도 도입 안내',
      date: '2024-11-10',
      isNew: false,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>최신 공지사항</h2>
          <button className={styles.moreButton}>
            전체보기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {announcements.map((announcement) => (
              <li key={announcement.id} className={styles.listItem}>
                <div className={styles.itemContent}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.itemTitle}>{announcement.title}</h3>
                    {announcement.isNew && (
                      <span className={styles.newBadge}>NEW</span>
                    )}
                  </div>
                  <p className={styles.itemDate}>{announcement.date}</p>
                </div>
                <button className={styles.itemButton} aria-label="공지사항 보기">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
