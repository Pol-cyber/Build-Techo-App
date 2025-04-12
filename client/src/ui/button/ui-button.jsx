import styles from "./ui-button.module.css"

export function UiButton({text, type = "button"}){

    return (
        <button className={styles.uiButton} type={type}>
            {text}
        </button>
    )
}