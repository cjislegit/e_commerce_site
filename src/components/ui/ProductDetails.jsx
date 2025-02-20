import { MoonLoader } from 'react-spinners';
import { useCartStore } from '../../store/cart';

import styles from './ProductDetails.module.css';

const ProductDetails = ({ product }) => {
  const { cart, addToCart } = useCartStore();

  if (!product || !product.rating) {
    return <MoonLoader color='#8a8fb9' />;
  }

  return (
    <section className={styles.productDetails}>
      <img
        className={styles.productDetails__image}
        src={product.image}
        alt={product.title}
      />
      <div>
        <h2 className={styles.productDetails__header}>{product.title}</h2>
        <span className={styles.productDetails__rating}>
          Rating: {product.rating.rate} ({product.rating.count})
        </span>
        <span className={styles.productDetails__price}>
          $
          {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(
            product.price
          )}
        </span>
        <p className={styles.productDetails__description}>
          {product.description}
        </p>
        <span
          className={styles.productDetails__add}
          onClick={() => addToCart({ ...product })}
        >
          Add To Cart
        </span>
        <span className={styles.productDetails__category}>
          Categories: {product.category}
        </span>
      </div>
    </section>
  );
};

export default ProductDetails;
