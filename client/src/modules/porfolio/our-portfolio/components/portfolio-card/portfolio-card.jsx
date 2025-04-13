import styles from "./portfolio-card.module.css"

export function PortfolioCard({ img }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={img} alt='' />
    </div>
  )
}
