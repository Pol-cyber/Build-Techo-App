import { Link } from "react-router-dom";
import headerLogo from "../../assets/headerLogo.png";
import { NavElements } from "../nav/list";
import styles from "./inner-header.module.css";
import { TwoRightArrow } from "../icons/two-right-arrow";
import { ZoomIcon } from "../icons/zoom-icon";
import { BasketIcon } from "../icons/basket-icon";
import { ThunderIcon } from "../icons/thunder";
import { MapPinIcon } from "../icons/maps-pin";
import { MailIcon } from "../icons/mail";


export function InnerHeader() {
  return (
    <div className={`${styles.innerHeader}`}>
      <div className={styles.navigationBlock}>
        <div className={styles.socialInfo}>
          <div className={styles.sicialInnerTitile}>
            <ThunderIcon />
            <p>We Will go through all the stages of construction</p>
          </div>
          <div className={styles.sicalInfoInner}>
            <div className={styles.sicialInnerTitile}>
              <MapPinIcon/>
              <p>203 Madison Ave, New York, USA</p>
            </div>
            <div className={styles.sicialInnerTitile}>
              <MailIcon/>
              <p>info@example.com</p>
            </div>
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
                <BasketIcon />
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
