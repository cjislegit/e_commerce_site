import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Product.module.css';
import ProductDetail from '../components/ui/ProductDetails';
import RelatedProducts from '../components/ui/RelatedProducts';

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <main className={styles.product}>
        <ProductDetail product={product} />
      </main>
      <RelatedProducts category={product.category} />
    </>
  );
};

export default Product;
