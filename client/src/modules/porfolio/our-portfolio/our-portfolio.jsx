import { PortfolioIntro } from "./components/portfolio-intro"
import { PortfolioButton } from "./components/portolio-button"
import styles from "./our-portfolio.module.css"

export function OurPortfolio() {
  return (
    <div className={styles.prtfolioContainer}>
      <PortfolioIntro />
      <div className={styles.categoryButtons}>
        <PortfolioButton title='SEE ALL' isActive />
        <PortfolioButton title='BUSINESS' />
        <PortfolioButton title='TECHNOLOGY' />
        <PortfolioButton title='UI/UX DESIGN' />
        <PortfolioButton title='WEB DESIGN' />
        <PortfolioButton title='DEVELOPMENT' />
      </div>
      <div></div>
    </div>
  )
}
