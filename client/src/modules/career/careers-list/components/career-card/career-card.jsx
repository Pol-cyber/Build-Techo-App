import { CalendarIcon } from "../../../../../ui/icons/calendar-icon"
import { MapPinIcon } from "../../../../../ui/icons/maps-pin"
import { WalletIcon } from "../../../../../ui/icons/wallet-icon"
import styles from "./career-card.module.css"

export function CareerCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitleContainer}>
        <img className={styles.cardImg} src='' alt='' />
        <p className={styles.cardTitle}></p>
        <p className={styles.cardJobType}></p>
      </div>
      <div className={styles.cardInfoContainer}></div>
      <p className={styles.cardDescription}></p>
      <button className={styles.applyBtn}></button>
      <MapPinIcon />
      <CalendarIcon />
      <WalletIcon />
    </div>
  )
}
