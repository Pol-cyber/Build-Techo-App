
import headerLogo from "./assets/header.png";
import { Breadcrumbs } from "./components/breadcrumbs";
import { InnerHeader } from "./components/inner-header";
import styles from "./global-header.module.css";

export function GlobalHeader({ title }) {

  return (
    <header className={`${styles.globalHeader}`}>
      <InnerHeader></InnerHeader>
      <div className={styles.titleCenter}>
        <p className={styles.titleCenterText}>{title}</p>
        <Breadcrumbs/>
      </div>
      <div className={`${styles.overlay}`} />
      <img
        src={headerLogo}
        alt="HeaderLogo"
        className={`${styles.imageHeader}`}
      ></img>
    </header>
  );
}
