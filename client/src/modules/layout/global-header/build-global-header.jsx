import headerLogo from "../../../assets/header.png"
import styles from "./global-header.module.css"

export function GlobalHeader() {
  return (
    <div className={`${styles.globalHeader}`}>
      <img
        src={headerLogo}
        alt='HeaderLogo'
        className={`${styles.imageHeader}`}
      ></img>
    </div>
  )
}
