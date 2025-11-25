import React, { useState, useEffect, useRef } from 'react';
import styles from './DashboardHeader.module.css';

function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.profileContainer} ref={menuRef}>
        <button 
          className={styles.profileButton}
          onClick={toggleMenu}
          aria-label="프로필 메뉴"
          aria-expanded={isMenuOpen}
        >
          <div className={styles.profileIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
              <path d="M12 14C7.58172 14 4 16.6863 4 20V22H20V20C20 16.6863 16.4183 14 12 14Z" fill="currentColor"/>
            </svg>
          </div>
        </button>
        
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <button className={styles.menuItem} onClick={closeMenu}>프로필 설정</button>
            <button className={styles.menuItem} onClick={closeMenu}>고객지원</button>
            <button className={styles.menuItem} onClick={closeMenu}>로그아웃</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default DashboardHeader;

