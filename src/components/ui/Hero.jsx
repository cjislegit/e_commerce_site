import styles from './Hero.module.css';

const Hero = ({ headline }) => {
  return (
    <section className={styles.hero}>
      <h2>{headline}</h2>
    </section>
  );
};

export default Hero;
