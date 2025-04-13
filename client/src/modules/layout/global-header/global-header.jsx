import headerLogo from "./assets/header.png";
import { Breadcrumbs } from "./components/breadcrumbs";
import { InnerHeader } from "./components/inner-header";
import styles from "./global-header.module.css";
import { useCheckDefinedPaths } from "./hooks/use-check-defined-paths";

export function GlobalHeader() {
  const {title, isDefinedPath} = useCheckDefinedPaths()


  return (
    <header className={`${styles.globalHeader}`}>
      <InnerHeader></InnerHeader>
      <div className={styles.titleCenter}>
        <p className={styles.titleCenterText}>{isDefinedPath ? title : '404'}</p>
        <Breadcrumbs title={title} isDefinedPath={isDefinedPath} />
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
