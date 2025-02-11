import styles from './ProductDetails.module.css';

const ProductDetails = ({ product }) => {
  console.log(product);
  return (
    <section className={styles.productDetails}>
      <img
        className={styles.productDetails__image}
        src={product.image}
        alt={product.title}
      />
      <div>
        <h2 className={styles.productDetails__header}>{product.title}</h2>
        <span>
          $
          {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(
            product.price
          )}
        </span>
        <p className={styles.productDetails__description}>
          {product.description}
        </p>
        <span className={styles.productDetails__category}>
          Categories: {product.category}
        </span>
      </div>
    </section>
  );
};

export default ProductDetails;
