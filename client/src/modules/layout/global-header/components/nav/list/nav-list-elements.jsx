import { Link } from "react-router-dom";
import styles from "./nav-list-elements.module.css";
import { ArrowDown } from "../../icons/arrow-down";
import { navElement } from "./constants";

export function NavElements() {
  return (
    <nav className={styles.navigationMenu}>
      <ul className={styles.navigationMenuUl}>
        {navElement.map((value, index) => {
          return (
            <li key={index} className={styles.navigationLi}>
              {value.link ? (
                <Link to={value.link}>{value.title}</Link>
              ) : (
                <p>{value.title}</p>
              )}
              {value.subMenu && (
                <>
                  <span className={styles.arrow}>
                    <ArrowDown />
                  </span>
                  <ul className={styles.subMenu}>
                    {value.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subItem.link}>{subItem.title}</Link>
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
