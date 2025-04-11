import { Link } from "react-router-dom";
import styles from "./nav-list-elements.module.css";

const element = {
  Home: [{ title: "AboutPage", link: "" }],
  Pages: null,
  Services: null,
  Blog: null,
  Shop: null,
  Contact: null,
};

export function NavElements() {
  return (
    <nav className={styles.navigationMenu}>
      <ul className={styles.navigationMenuUl}>
        {Object.keys(element).map((value, index) => {
          return (
            <li key={index} className={styles.navigationLi}>
              <Link href="#">{value}</Link>
              {element[value] && (
                <>
                  <span className={styles.arrow}>
                    <ArrowDown />
                  </span>
                  <ul className={styles.subMenu}>
                    {element[value].map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.link}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function ArrowDown() {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.54297 5.69141L0.753906 1.90234C0.66276 1.8112 0.617188 1.70052 0.617188 1.57031C0.617188 1.4401 0.66276 1.32943 0.753906 1.23828L1.18359 0.808594C1.27474 0.717448 1.38542 0.671875 1.51562 0.671875C1.64583 0.658854 1.75651 0.697917 1.84766 0.789062L4.875 3.81641L7.90234 0.789062C7.99349 0.697917 8.10417 0.658854 8.23438 0.671875C8.36458 0.671875 8.47526 0.717448 8.56641 0.808594L8.99609 1.23828C9.08724 1.32943 9.13281 1.4401 9.13281 1.57031C9.13281 1.70052 9.08724 1.8112 8.99609 1.90234L5.20703 5.69141C5.11589 5.79557 5.00521 5.84766 4.875 5.84766C4.74479 5.84766 4.63411 5.79557 4.54297 5.69141Z"
        fill="white"
      />
    </svg>
  );
}
