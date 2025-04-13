import notFoundE from "../../assets/notFoundE.png";
import { UiButton } from "../../ui/button/ui-Button";
import styles from "./not-found-error.module.css";

export function NotFoundError() {
  return (
    <section className={styles.errorNotSection}>
      <img src={notFoundE} className={styles.errorImage}></img>
      <p className={styles.errorTitle}>Oops! Page Not found</p>
      <UiButton text="Back to Home page" link={"/"}></UiButton>
    </section>
  );
}
