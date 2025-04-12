import { OurPortfolio } from "../../modules/porfolio/our-portfolio"
import styles from "./portfolio.module.css"

export function PortfolioPage() {
  return (
    <div className={styles.layout}>
      <OurPortfolio />
    </div>
  )
}
