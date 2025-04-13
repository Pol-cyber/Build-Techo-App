import { Loader } from "../../../../../ui/loader"
import styles from "./load-more-btn.module.css"

export function LoadMoreBtn({ isLoading, onClick }) {
  return (
    <button onClick={onClick} className={styles.loadButton}>
      {isLoading ? <Loader size='small' color='white' /> : "LOAD MORE"}
    </button>
  )
}
