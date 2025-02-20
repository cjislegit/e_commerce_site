import { MoonLoader } from 'react-spinners';
import { useCartStore } from '../../store/cart';
import { ToastContainer, toast } from 'react-toastify';

import styles from './ProductDetails.module.css';

const ProductDetails = ({ product }) => {
  const { cart, addToCart } = useCartStore();

  if (!product || !product.rating) {
    return <MoonLoader color='#8a8fb9' />;
  }

  const handleCartClick = () => {
    addToCart(product);
    toast.success('Product added to cart!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
        <button
          className={styles.productDetails__add}
          onClick={handleCartClick}
        >
          Add To Cart
        </button>
        <span className={styles.productDetails__category}>
          Categories: {product.category}
        </span>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ProductDetails;
