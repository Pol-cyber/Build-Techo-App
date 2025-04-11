import { Link } from "react-router-dom"
import { LINK, LINKS_TITLES } from "../../constants"
import styles from "./links-group.module.css"

export function LinksGroup({ title }) {
  return (
    <div className={styles.linksContainer}>
      <p className={styles.title}>{title}</p>
      {LINKS_TITLES[title].map((title) => {
        return (
          <Link to={LINK} target='_blank'>
            {title}
          </Link>
        )
      })}
    </div>
  )
}
