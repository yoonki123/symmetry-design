import React, { useState, useRef, useEffect } from 'react';
import styles from './DashboardHeader.module.css';

function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.profileSection} ref={dropdownRef}>
          <button 
            className={styles.profileButton}
            onClick={toggleDropdown}
            aria-label="프로필 메뉴"
            aria-expanded={isDropdownOpen}
          >
            <div className={styles.profileIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                <path d="M12 14C7.58172 14 4 16.6863 4 20V22H20V20C20 16.6863 16.4183 14 12 14Z" fill="currentColor"/>
              </svg>
            </div>
          </button>
          
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <button className={styles.dropdownItem} onClick={handleMenuClick}>
                프로필 설정
              </button>
              <button className={styles.dropdownItem} onClick={handleMenuClick}>
                고객지원
              </button>
              <button className={styles.dropdownItem} onClick={handleMenuClick}>
                로그아웃
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;

