import { Link } from "react-router-dom";
import styles from "./nav-list-elements.module.css";
import { ArrowDown } from "../../icons/arrow-down";

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
