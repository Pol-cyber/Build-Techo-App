import { Link } from "react-router-dom"
import styles from "./ui-button.module.css"

export function UiButton({text, type = "button",link}){

    return (
        <Link to={link} className={styles.uiButton} type={type}>
            {text}
        </Link>
    )
}