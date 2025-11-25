import React from 'react';
import styles from './Layout.module.css';
import Header from './Header';

/**
 * 기본 페이지 레이아웃
 * Header는 고정, children으로 메인 컨텐츠를 받음
 */
function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
