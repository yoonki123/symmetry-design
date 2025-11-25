import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header} data-node-id="822:19231">
      <div className={styles.headerInner}>
        <div className={styles.imgHeaderLogo}>
          <img src="/icons/header-symmetry-logo.svg" alt="로고" />
        </div>
        <div className={styles.trainerGnb}>
          <div className={`${styles.trainerGnbTxt} ${styles.active}`}>
            <div className={styles.activeDot}>
              <img src="/icons/active-dot.svg" alt="활성 점" />
            </div>
            <p>고객지원</p>
          </div>
          <a className={styles.trainerGnbTxt}>
            <p>운동</p>
          </a>
          <a className={styles.trainerGnbTxt}>
            <p>스케쥴</p>
          </a>
          <a className={styles.trainerGnbTxt}>
            <p>SOAP 노트</p>
          </a>
        </div>
        <div className={styles.trainerInfo}>
          <div className={styles.welcome}>
            <p>환영합니다.</p>
            <div className={styles.name}>
              <p>김아무개</p>
              <p>님</p>
            </div>
            <div className={styles.workoutCount}>
              <p>운동대기</p>
              <div className={styles.data}>
                <p className={styles.sysTxtBoldLink2}>125</p>
                <p>건</p>
              </div>
            </div>
          </div>
          <div className={styles.iconHeaderProfile56}>
            <img src="/icons/profile-icon.svg" alt="프로필" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
