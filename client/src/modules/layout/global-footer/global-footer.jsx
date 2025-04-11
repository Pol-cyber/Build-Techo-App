import { ContactInfo } from "./components/contact-info"
import { InfoBlock } from "./components/info-block"
import { JoinNewslatter } from "./components/join-newslatter/join-newslatter"
import { LinksGroup } from "./components/links-group"
import styles from "./global-footer.module.css"

export function GlobalFooter() {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.contactAndNewslatterContainer}>
          <ContactInfo />
          <JoinNewslatter />
        </div>
        <div className={styles.mainContentContainer}>
          <InfoBlock />
          <div className={styles.linksContainer}>
            <LinksGroup title='Resources' />
            <LinksGroup title='Company' />
            <LinksGroup title='Help page' />
          </div>
        </div>
        <p className={styles.copyright}>
          © Copyright 2023 All rights reserved.
        </p>
      </div>
    </footer>
  )
}
