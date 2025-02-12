import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.navbar__link}>
        <h1 className={styles.navbar__heading}>E-Commerce</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
