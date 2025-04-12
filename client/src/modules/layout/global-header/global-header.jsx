import { useLocation } from "react-router-dom"
import headerLogo from "./assets/header.png"
import { Breadcrumbs } from "./components/breadcrumbs"
import { InnerHeader } from "./components/inner-header"
import styles from "./global-header.module.css"
import { headerTitle } from "./constants"

export function GlobalHeader() {

  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/");

  const lastSegment = segments[segments.length - 1];
  const title = headerTitle[lastSegment] ?  headerTitle[lastSegment] : lastSegment

  return (
    <header className={`${styles.globalHeader}`}>
      <InnerHeader></InnerHeader>
      <div className={styles.titleCenter}>
        <p className={styles.titleCenterText}>{title}</p>
        <Breadcrumbs title={title} />
      </div>
      <div className={`${styles.overlay}`} />
      <img
        src={headerLogo}
        alt='HeaderLogo'
        className={`${styles.imageHeader}`}
      ></img>
    </header>
  )
}
