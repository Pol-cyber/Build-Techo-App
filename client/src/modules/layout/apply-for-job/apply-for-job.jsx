import styles from "./apply-for-job.module.css";
import fourLine from "../../../assets/fourLine.png";
import { ApplyForm } from "./components/form/";

export function ApplyForJob() {
  return (
    <section className={styles.applyJobSection}>
      <div className={styles.applyJobContainer}>
        <div className={styles.higherTitleContainer}>
          <img src={fourLine} className={styles.higherTitleImage}></img>
          <p>Job Apply Now</p>
          <h1 className={styles.higherTitle}>Apply For This Job</h1>
        </div>
        <p className={styles.description}>
          Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est
          massa, sit amet tempor mi auctor nec.
        </p>
        <ApplyForm/>
      </div>
    </section>
  );
}
