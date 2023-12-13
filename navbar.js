import styles from "./navbar.module.css";

function Navbar(props) {
  const { cartCount } = props;
  return (
    <>
      <div className={styles.Nav}>
        <div className={styles.Title}>
          <h2>Movie-App</h2>
        </div>
        <div className={styles.CartDiv}>
          <img
            className={styles.Image}
            alt="Cart Item"
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
          />
          <div className={styles.Items} color="orange">
            {cartCount}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
