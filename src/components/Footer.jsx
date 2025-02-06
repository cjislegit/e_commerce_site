import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__container}>
        <h2 className={styles.footer__header}>E-Commerce</h2>
        <p>© 2025 - All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
