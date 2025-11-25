import styles from './BodySection.module.css';

function BodySection() {
  const boardItems = Array(10).fill({
    no: '9999',
    type: '결제',
    company: '(주)클럽데몬스트레이션스...',
    title: '결제 수단 변경 문의',
    date: '2025-04-15',
    handler: '김아무개',
    status: '처리중'
  });

  const completedItems = boardItems.slice(0, 2).map(item => ({ ...item, status: '처리완료' }));
  const activeItems = boardItems.slice(2);

  return (
    <div className={styles.bodySection} data-node-id="822:19235">
      <div className={styles.container}>
        <div className={styles.contentSection}>
          {/* Header */}
          <div className={styles.boardType}>
            <div className={styles.boardTypeInner}>
              <p className={styles.colNo}>No.</p>
              <p className={styles.colType}>문의종류</p>
              <p className={styles.colCompany}>기업명</p>
              <p className={styles.colTitle}>제목</p>
              <p className={styles.colRegDate}>등록일</p>
              <p className={styles.colHandler}>처리자</p>
              <p className={styles.colStatus}>상태</p>
            </div>
          </div>

          {/* Completed Items */}
          {completedItems.map((item, index) => (
            <div key={`completed-${index}`} className={styles.sysBoard}>
              <div className={styles.sysBoardInner}>
                <p className={styles.opacityCancel}>{item.no}</p>
                <p className={styles.opacityCancel}>{item.type}</p>
                <p className={styles.opacityCancel}>{item.company}</p>
                <p className={styles.opacityCancel}>{item.title}</p>
                <p className={styles.opacityCancel}>{item.date}</p>
                <p className={styles.opacityCancel}>{item.handler}</p>
                <p className={styles.opacityCancel}>{item.status}</p>
              </div>
            </div>
          ))}

          {/* Active Items */}
          {activeItems.map((item, index) => (
            <a key={`active-${index}`} className={`${styles.sysBoard} ${styles.clickable}`}>
              <div className={styles.sysBoardInner}>
                <p>{item.no}</p>
                <p>{item.type}</p>
                <p>{item.company}</p>
                <p>{index === 0 ? '제목이 길면 제목이 길면 제목이 길면 제...' : item.title}</p>
                <p>{item.date}</p>
                <p>{item.handler}</p>
                <p>{item.status}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className={styles.pagingDownloadSection}>
          <div className={styles.nullSpacer} />
          <div className={styles.paging}>
            <div name="replace-me-2" />
            <div className={`${styles.sysBoardPagingnum} ${styles.active}`}>
              <div className={styles.num}>
                <p>1</p>
              </div>
            </div>
            {[2, 3, 4, 5, 6].map(num => (
              <div key={num} className={styles.sysBoardPagingnum}>
                <div className={styles.num}>
                  <p>{num}</p>
                </div>
              </div>
            ))}
            <div className={styles.dot}>
              <p>...</p>
            </div>
            <div className={styles.sysBoardPagingnum}>
              <div className={styles.num}>
                <p>99</p>
              </div>
            </div>
            <div name="replace-me-1" />
          </div>
          <div className={styles.downloadSection}>
            <div name="replace-me-0" />
            <div className={styles.sysTxtLink}>
              <p>엑셀 다운로드</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodySection;
