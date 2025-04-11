import { Link } from "react-router-dom";
import headerLogo from "../../assets/headerLogo.png";
import { NavElements } from "../nav/list";
import styles from "./inner-header.module.css";

export function InnerHeader() {
  return (
    <div className={`${styles.innerHeader}`}>
      <div className={styles.navigationBlock}>
        <div className={styles.socialInfo}>
          <p>We Will go through all the stages of construction</p>
          <div className={styles.sicalInfoInner}>
            <p>203 Madison Ave, New York, USA</p>
            <p>info@example.com</p>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={`${styles.headerLogo}`}>
            <img src={headerLogo} alt="headerLogo"></img>
          </div>
          <div className={styles.navigationContent}>
            <NavElements></NavElements>
            <div className={styles.navigationShop}>
              <div className={styles.navigationIcons}>
                <ZoomIcon />
                <BasketIcon/>
              </div>
              <div className={styles.getQuote}>
                <Link to={"/"}>
                  GET A QUOTE <TwoRightArrow></TwoRightArrow>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TwoRightArrow() {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9935 6.327L7.78641 11.5074C7.66179 11.632 7.51048 11.6943 7.33246 11.6943C7.15444 11.6943 7.00312 11.632 6.87851 11.5074L6.26434 10.9199C6.13973 10.7953 6.07742 10.644 6.07742 10.4659C6.07742 10.2879 6.13973 10.1366 6.26434 10.012L10.3766 5.87305L6.26434 1.7341C6.15753 1.60949 6.10413 1.45817 6.10413 1.28015C6.10413 1.10213 6.15753 0.950816 6.26434 0.826202L6.87851 0.238739C7.00312 0.114126 7.15444 0.0518188 7.33246 0.0518188C7.51048 0.0518188 7.66179 0.114126 7.78641 0.238739L12.9935 5.4191C13.0647 5.50811 13.1092 5.60602 13.127 5.71283C13.1626 5.81964 13.1626 5.92645 13.127 6.03326C13.1092 6.14008 13.0647 6.23799 12.9935 6.327ZM7.86652 5.4191C7.97333 5.54371 8.02673 5.69503 8.02673 5.87305C8.02673 6.05107 7.97333 6.20238 7.86652 6.327L2.65945 11.5074C2.53484 11.632 2.38352 11.6943 2.20551 11.6943C2.02749 11.6943 1.87617 11.632 1.75156 11.5074L1.13739 10.9199C1.03058 10.7953 0.977173 10.644 0.977173 10.4659C0.977173 10.2879 1.03058 10.1366 1.13739 10.012L5.24963 5.87305L1.13739 1.7341C1.01278 1.60949 0.95047 1.45817 0.95047 1.28015C0.95047 1.10213 1.01278 0.950816 1.13739 0.826202L1.75156 0.238739C1.87617 0.114126 2.02749 0.0518188 2.20551 0.0518188C2.38352 0.0518188 2.53484 0.114126 2.65945 0.238739L7.86652 5.4191Z"
        fill="white"
      />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3711 13.8438C16.5169 13.9896 16.5898 14.1667 16.5898 14.375C16.5898 14.5833 16.5169 14.7604 16.3711 14.9062L15.4961 15.7812C15.3503 15.9271 15.1732 16 14.9648 16C14.7565 16 14.5794 15.9271 14.4336 15.7812L11.3086 12.6562C11.1628 12.5104 11.0898 12.3333 11.0898 12.125V11.625C9.92318 12.5417 8.58984 13 7.08984 13C5.29818 13 3.76693 12.3646 2.49609 11.0938C1.22526 9.82292 0.589844 8.29167 0.589844 6.5C0.589844 4.70833 1.22526 3.17708 2.49609 1.90625C3.76693 0.635417 5.29818 0 7.08984 0C8.88151 0 10.4128 0.635417 11.6836 1.90625C12.9544 3.17708 13.5898 4.70833 13.5898 6.5C13.5898 8 13.1315 9.33333 12.2148 10.5H12.7148C12.9232 10.5 13.1003 10.5729 13.2461 10.7188L16.3711 13.8438ZM4.24609 9.34375C5.03776 10.1146 5.98568 10.5 7.08984 10.5C8.19401 10.5 9.13151 10.1146 9.90234 9.34375C10.694 8.55208 11.0898 7.60417 11.0898 6.5C11.0898 5.39583 10.694 4.45833 9.90234 3.6875C9.13151 2.89583 8.19401 2.5 7.08984 2.5C5.98568 2.5 5.03776 2.89583 4.24609 3.6875C3.47526 4.45833 3.08984 5.39583 3.08984 6.5C3.08984 7.60417 3.47526 8.55208 4.24609 9.34375Z"
        fill="white"
      />
    </svg>
  );
}

function BasketIcon() {
  return (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6396 9.40625C16.5563 9.80208 16.3167 10 15.9209 10H6.76465L6.95215 11H15.3584C15.5876 11 15.7751 11.0938 15.9209 11.2812C16.0667 11.4688 16.1188 11.6771 16.0771 11.9062L15.8896 12.6875C16.5563 13 16.8896 13.5208 16.8896 14.25C16.8896 14.7292 16.7126 15.1354 16.3584 15.4688C16.0251 15.8229 15.6188 16 15.1396 16C14.6605 16 14.2438 15.8229 13.8896 15.4688C13.5563 15.1354 13.3896 14.7292 13.3896 14.25C13.3896 13.75 13.5667 13.3333 13.9209 13H7.3584C7.71257 13.3333 7.88965 13.75 7.88965 14.25C7.88965 14.7292 7.71257 15.1354 7.3584 15.4688C7.02507 15.8229 6.61882 16 6.13965 16C5.66048 16 5.24382 15.8229 4.88965 15.4688C4.55632 15.1354 4.38965 14.7292 4.38965 14.25C4.38965 13.5833 4.68132 13.0729 5.26465 12.7188L3.07715 2H0.889648C0.681315 2 0.504232 1.92708 0.358398 1.78125C0.212565 1.63542 0.139648 1.45833 0.139648 1.25V0.75C0.139648 0.541667 0.212565 0.364583 0.358398 0.21875C0.504232 0.0729167 0.681315 0 0.889648 0H4.1084C4.27507 0 4.4209 0.0625 4.5459 0.1875C4.69173 0.291667 4.78548 0.427083 4.82715 0.59375L5.1084 2H17.3896C17.6396 2 17.8376 2.09375 17.9834 2.28125C18.1292 2.46875 18.1709 2.67708 18.1084 2.90625L16.6396 9.40625Z"
        fill="white"
      />
    </svg>
  );
}
