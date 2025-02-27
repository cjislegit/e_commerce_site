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
              <h4 className={styles.cart__productTitle}>Product</h4>
              <h4 className={styles.cart__priceTitle}>Price</h4>
              <h4 className={styles.cart__quantityTitle}>Quantity</h4>
              <h4 className={styles.cart__totalTitle}>Total</h4>
            </div>
            <div className={styles.cart__productItems}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cart__productItem}>
                  <div className={styles.cart__imgContainer}>
                    <div
                      className={styles.cart__imgClose}
                      onClick={() => handleDelete(item.id)}
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
                  <span className={styles.cart__price}>
                    {new Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 2,
                    }).format(item.price)}
                  </span>
                  <input
                    className={styles.cart__quantity}
                    type='number'
                    value={item.quantity}
                  />
                  <span className={styles.cart__itemTotal}>
                    {new Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 2,
                    }).format(item.price * item.quantity)}
                  </span>
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
