import { useNavigate } from 'react-router-dom';

import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className={styles.card__image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.card__data}>
        <h3 className={styles.card__title}>{product.title}</h3>
        <p className={styles.card__price}>
          $
          {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(
            product.price
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
