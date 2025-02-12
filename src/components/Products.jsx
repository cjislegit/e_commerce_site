import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';

import styles from './Products.module.css';
import ProductCard from './ui/ProductCard';

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  let grid =
    productData.length === 0 ? (
      <MoonLoader color='#8a8fb9' />
    ) : (
      <section className={styles.products__grid}>
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    );

  return <main className={styles.products}>{grid}</main>;
};

export default Products;
