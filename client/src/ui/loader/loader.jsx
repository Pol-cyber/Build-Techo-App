import { GridLoader } from "react-spinners"
import styles from "./loader.module.css"

export function Loader({ size, color = "rgba(255, 102, 0, 1)" }) {
  const TempLoader = {
    small: <GridLoader size={5} color={color} />,
    medium: <GridLoader size={15} color={color} />,
  }[size]
  return <div className={styles.loaderContainer}>{TempLoader}</div>
}
