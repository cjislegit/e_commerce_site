import styles from './Cart.module.css';
import Hero from '../components/ui/Hero';

const Cart = () => {
  return (
    <>
      <Hero headline='Shopping Cart' />
      <main className={styles.cart}>
        <section className={styles.cart__container}>
          <div className={styles.cart__products}>
            <div className={styles.cart__productTitles}>
              <h4>Product</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>
          </div>
          <div className={styles.cart__total}>
            <div className={styles.cart__totalTitle}>
              <h4>Cart Total</h4>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
