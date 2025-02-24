import styles from './Cart.module.css';
import Hero from '../components/ui/Hero';
import { useCartStore } from '../store/cart';

const Cart = () => {
  const { cart, deleteFromCart } = useCartStore();

  console.log(cart);
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
            <div className={styles.cart__productItems}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cart__productItem}>
                  {item.title}
                </div>
              ))}
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
