import styles from "./portfolio-intro.module.css"

export function PortfolioIntro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.subtitleContent}>
        <img src='' alt='' />
        <p className={styles.introSubtitle}>Our best portfolio</p>
      </div>
      <div className={styles.introContent}>
        <p className={styles.title}>Our porfolio</p>
        <p className={styles.description}>
          We’ve grown up with the internet revolution, and we know how to
          deliver on its promise of improved business
        </p>
      </div>
    </div>
  )
}
