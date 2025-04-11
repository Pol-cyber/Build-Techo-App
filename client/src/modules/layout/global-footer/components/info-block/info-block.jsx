import styles from "./info-block.module.css"
import logo from "../../assets/logo.png"
import paymentMethods from "../../assets/paymentMethods.png"

export function InfoBlock() {
  return (
    <div className={styles.infoContainer}>
      <img className={styles.logoImg} src={logo} alt='logo' />
      <p className={styles.description}>
        Improve efficiency, provide a better Customer experience with modern
        Technolo services available
      </p>
      <img className={styles.paymentsImg} src={paymentMethods} alt='' />
    </div>
  )
}
