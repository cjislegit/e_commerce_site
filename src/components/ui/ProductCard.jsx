import { useNavigate } from 'react-router-dom';

import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Ensure keyboard interaction works
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      navigate(`/product/${product.id}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      className={styles.card}
      onClick={handleCardClick}
      onKeyDown={handleCardClick}
      role='link'
      tabIndex='0' // Allows keyboard navigation
      aria-label={`View details for ${product.title}`}
    >
      <div className={styles.card__image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.card__data}>
        <h3 className={styles.card__title}>
          {product.title.slice(0, 22)}
          {product.title.length > 22 ? '. . .' : null}
        </h3>
        <p className={styles.card__price}>
          $
          {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(
            product.price
          )}
        </p>
      </div>
    </a>
  );
};

export default ProductCard;
