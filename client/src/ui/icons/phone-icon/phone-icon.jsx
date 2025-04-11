import style from "./phone-icon.module.css"

export function PhoneIcon() {
  return (
    <div className={style.phoneIconContainer}>
      <div className={style.phoneIconContent}>
        <svg
          className={style.phoneIcon}
          viewBox='0 0 19 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.8672 1.71899C18.3125 1.81274 18.5352 2.08228 18.5352 2.52759C18.5352 7.02759 16.9414 10.8713 13.7539 14.0588C10.5664 17.2463 6.72266 18.8401 2.22266 18.8401C1.77734 18.8401 1.50781 18.6174 1.41406 18.1721L0.570312 14.5159C0.453125 14.0706 0.617188 13.7542 1.0625 13.5667L5 11.8792C5.375 11.7151 5.70312 11.7971 5.98438 12.1252L7.70703 14.2346C9.08984 13.6018 10.3086 12.7463 11.3633 11.6682C12.4414 10.5901 13.2969 9.37134 13.9297 8.01196L11.8203 6.25415C11.4922 5.99634 11.4102 5.66821 11.5742 5.26978L13.2617 1.33228C13.4492 0.9104 13.7656 0.758057 14.2109 0.875244L17.8672 1.71899Z'
            fill='#FF6600'
          />
        </svg>
      </div>
    </div>
  )
}
