import { useState, useEffect } from 'react';

import styles from './RelatedProducts.module.css';
import { MoonLoader } from 'react-spinners';
import ProductCard from './ProductCard';

const RelatedProducts = ({ category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data));
  }, [category]);

  let productGrid =
    relatedProducts.length === 0 ? (
      <MoonLoader color='#8a8fb9' />
    ) : (
      <div className={styles.related__products}>
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );

  return (
    <section className={styles.related}>
      <div className={styles.related__container}>
        <h2 className={styles.related__header}>Related Products</h2>
        {productGrid}
      </div>
    </section>
  );
};

export default RelatedProducts;
