import { Link } from "react-router-dom";
import styles from "./nav-list-elements.module.css";
import { ArrowDown } from "../../icons/arrow-down";
import { navElement } from "./constants";

export function NavElements() {
  return (
    <nav className={styles.navigationMenu}>
      <ul className={styles.navigationMenuUl}>
        {Object.keys(navElement).map((value, index) => {
          return (
            <li key={index} className={styles.navigationLi}>
              <Link href="#">{value}</Link>
              {navElement[value] && (
                <>
                  <span className={styles.arrow}>
                    <ArrowDown />
                  </span>
                  <ul className={styles.subMenu}>
                    {navElement[value].map((subItem, subIndex) => (
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
