import styles from "../sass/pages/dashboard.module.scss";

function SignedIn({ funcToRun }) {
  if (localStorage.getItem('signedIn') === 'true') {
    return
  } else {
    return (
      <button className={styles.menuBtn} onClick={funcToRun}>
        <i className="fa-solid fa-user-plus"></i>
        Register
      </button>
    );
  }
}

export default SignedIn;
