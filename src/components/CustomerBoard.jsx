import React from 'react';
import styles from './CustomerBoard.module.css';
import MyPage from './MyPage';  

function CustomerBoard() {
  return (
    <div className={styles.content} data-name="content" data-node-id="879:27754">
      <table className={styles.boardTable}>
        <thead>
          <tr className={styles.boardType} data-name="board-type" data-node-id="879:27755">
            <th className={styles.headerText} data-node-id="879:27756">
              No.
            </th>
            <th className={styles.headerText} data-node-id="879:27757">
              ID
            </th>
            <th className={styles.headerText} data-node-id="879:27758">
              성명
            </th>
            <th className={styles.headerText} data-node-id="879:27759">
              테스트갱신일
            </th>
            <th className={styles.headerText} data-node-id="879:27760">
              운동추천일
            </th>
            <th className={styles.headerText} data-node-id="879:27761">
              최근추천회차
            </th>
            <th className={styles.headerText} data-node-id="895:16026">
              추천마감일
            </th>
            <th className={styles.headerText} data-node-id="879:27762">
              상태
            </th>
          </tr>
        </thead>
        <tbody>
          {Array(13).fill(0).map((_, index) => (
            <tr key={index} className={styles.sysBoard} data-name="sys/board">
              <td className={styles.boardRowText}>{index + 1}</td>
              <td className={styles.boardRowText}>ID</td>
              <td className={styles.boardRowText}>성명</td>
              <td className={styles.boardRowText}>테스트갱신일</td>
              <td className={styles.boardRowText}>운동추천일</td>
              <td className={styles.boardRowText}>최근추천회차</td>
              <td className={styles.boardRowText}>
                <span className={styles.dDayText} style={{ marginRight: '4px' }}>2025-04-23</span>
                <span className={styles.dDayValue}>D-364</span>
              </td>
              <td className={styles.boardRowText}>상태</td>
            </tr>
          ))}
        </tbody>
      </table>
      <MyPage />
    </div>
  );
}

export default CustomerBoard;
