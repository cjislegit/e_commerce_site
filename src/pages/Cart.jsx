import styles from './Cart.module.css';
import Hero from '../components/ui/Hero';
import { useCartStore } from '../store/cart';

const Cart = () => {
  const { cart, deleteFromCart } = useCartStore();

  const handleDelete = (pid) => {
    deleteFromCart(pid);
  };
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
                  <div className={styles.cart__imgContainer}>
                    <div
                      className={styles.cart__imgClose}
                      onClick={() => deleteFromCart(item.id)}
                    >
                      x
                    </div>
                    <img
                      className={styles.cart__img}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <span className={styles.cart__title}>{item.title}</span>
                  <span className={styles.cart__price}>{item.price}</span>
                  <input className={styles.cart__quantity} type='number' />
                  <span className={styles.cart__itemTotal}>{item.price}</span>
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
