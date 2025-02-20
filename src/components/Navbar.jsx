import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Link to='/' className={styles.navbar__link}>
          <h1 className={styles.navbar__heading}>E-Commerce</h1>
        </Link>
        <ul className={styles.navbar__menu}>
          <li className={styles.navbar__menuItem}>
            <Link to='/'>Home</Link>
          </li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
