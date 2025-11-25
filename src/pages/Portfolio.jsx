import Layout from '../components/Layout';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <Layout>
      <div className={styles.portfolioContent}>
        <h1 className={styles.title}>
          Welcome to My Portfolio
        </h1>
        <p className={styles.subtitle}>
          React + CSS Modules 실전 프로젝트 예제
        </p>
        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.primaryButton}>
            See Projects
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;