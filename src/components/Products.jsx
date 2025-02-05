import { useEffect, useState } from 'react';

import styles from './Products.module.css';
import ProductCard from './ui/ProductCard';

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  console.log(productData);

  return (
    <main className={styles.products}>
      <section className={styles.products__grid}>
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Products;
