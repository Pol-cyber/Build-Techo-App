import styles from "./portfolio-button.module.css"

export function PortfolioButton({ title, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.portfolioButton} ${isActive ? styles.isActive : ""}`}
    >
      {title}
    </button>
  )
}
