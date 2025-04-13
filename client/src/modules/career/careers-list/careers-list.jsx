import styles from "./careers-list.module.css"
import { CareerCard } from "./components/career-card"

export function CareerList() {
  return (
    <div className={styles.cardsContainer}>
      <CareerCard />
      <CareerCard />
      <CareerCard />
      <CareerCard />
    </div>
  )
}
