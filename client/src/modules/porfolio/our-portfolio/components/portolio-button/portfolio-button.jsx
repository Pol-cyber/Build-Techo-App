import styles from "./portfolio-button.module.css"

export function PortfolioButton({ title, isActive }) {
  return (
    <button
      className={`${styles.portfolioButton} ${isActive ? styles.isActive : ""}`}
    >
      {title}
    </button>
  )
}
