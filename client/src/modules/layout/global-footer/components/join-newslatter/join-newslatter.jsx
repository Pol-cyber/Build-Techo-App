import styles from "./join-newslatter.module.css"

export function JoinNewslatter() {
  return (
    <div className={styles.joinNewslatterContainer}>
      <p className={styles.joinNewslatterText}>Join Newslatter</p>
      <div>
        <input
          className={styles.joinNewslatterInput}
          type='text'
          placeholder='Your email'
        />
        <button className={styles.joinNewslatterButton}>Submit</button>
      </div>
    </div>
  )
}
