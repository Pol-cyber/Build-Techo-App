import { useState } from "react";
import styles from "./apply-form.module.css";
import { formFileds } from "./constants";
import { UiButton } from "../../../../ui/button/ui-Button";
import { toCamelCase } from "../../helpers/to-camel-case";

export function ApplyForm() {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <form className={styles.formContainer}>
      <div className={styles.gridFormContainer}>
        {formFileds.map((value, index) => {
          return (
            <div className={styles.inputContainer} key={index}>
              {!value.data && (
                <input
                  className={styles.formInput}
                  placeholder={value.title}
                  name={toCamelCase(value.title)}
                ></input>
              )}
              {value.data && (
                <select
                  name={toCamelCase(value.title)}
                  required
                  className={styles.formSelect}
                >
                  <option value="" disabled hidden>
                    Position
                  </option>
                  {value.data.map((position, indexPos) => (
                    <option value={position} key={indexPos}>
                      {position}
                    </option>
                  ))}
                </select>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.imageLoad}>
        <p className={styles.imageLoadTitle}>Upload CV</p>
        <div className={styles.uploadWrapper}>
          <label className={styles.uploadBtn}>
            Choose File
            <input
              type="file"
              accept="image/*,.pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
          <span className={styles.fileName}>{fileName}</span>
        </div>
      </div>
      <textarea className={styles.formTextAread}></textarea>
      <div className={styles.formButoon}>
        <UiButton text={"Submit now"} type="submit" />
      </div>
    </form>
  );
}
