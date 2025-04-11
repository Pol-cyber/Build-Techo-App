import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumbs.module.css";
import React from "react";


export function Breadcrumbs({title}) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/">Home</Link>
      {pathnames.length > 0 && <DoubleArrow />}

      {pathnames.map((part, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={to}>
            <span>
              {index > 0 && <span> / </span>}
              <Link
                to={to}
              >
                {isLast ? title : part.charAt(0).toUpperCase() + part.slice(1)}
              </Link>
            </span>
            {!isLast > 0 && <DoubleArrow />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function DoubleArrow() {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.225 6.41643L2.88577 10.7557C2.73687 10.9046 2.55607 10.979 2.34336 10.979C2.13065 10.979 1.94985 10.9046 1.80096 10.7557L1.09902 10.0218C0.950128 9.87292 0.87568 9.69212 0.87568 9.47942C0.87568 9.26671 0.950128 9.08591 1.09902 8.93701L4.16201 5.87402L1.09902 2.81104C0.950128 2.66214 0.87568 2.48134 0.87568 2.26863C0.87568 2.05592 0.950128 1.87512 1.09902 1.72623L1.80096 0.992386C1.94985 0.843491 2.13065 0.769043 2.34336 0.769043C2.55607 0.769043 2.73687 0.843491 2.88577 0.992386L7.225 5.33162C7.3739 5.48051 7.44834 5.66132 7.44834 5.87402C7.44834 6.08673 7.3739 6.26753 7.225 6.41643ZM13.351 5.33162C13.4999 5.48051 13.5743 5.66132 13.5743 5.87402C13.5743 6.08673 13.4999 6.26753 13.351 6.41643L9.01174 10.7557C8.86285 10.9046 8.68205 10.979 8.46934 10.979C8.25663 10.979 8.07583 10.9046 7.92693 10.7557L7.225 10.0218C7.0761 9.87292 7.00166 9.69212 7.00166 9.47942C7.00166 9.26671 7.0761 9.08591 7.225 8.93701L10.288 5.87402L7.225 2.81104C7.0761 2.66214 7.00166 2.48134 7.00166 2.26863C7.00166 2.05592 7.0761 1.87512 7.225 1.72623L7.92693 0.992386C8.01202 0.928574 8.0971 0.875397 8.18218 0.832855C8.28854 0.790314 8.38426 0.769043 8.46934 0.769043C8.57569 0.769043 8.67141 0.790314 8.75649 0.832855C8.86285 0.875397 8.94793 0.928574 9.01174 0.992386L13.351 5.33162Z"
        fill="#FF6600"
      />
    </svg>
  );
}
