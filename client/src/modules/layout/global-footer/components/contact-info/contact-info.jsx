import { Link } from "react-router-dom"
import style from "./contact-info.module.css"
import { SocialIcon } from "../../../../../ui/icons/social-icon"
import { PhoneIcon } from "../../../../../ui/icons/phone-icon"

export function ContactInfo() {
  return (
    <div className={style.contactInfoContainer}>
      <div className={style.contentContainer}>
        <PhoneIcon />
        <div>
          <p className={style.callText}>Give us a call</p>
          <p className={style.callNumber}>+123-456-7890</p>
        </div>
      </div>

      <div className={style.contentContainer}>
        <Link
          to='https://www.youtube.com/watch?v=c3JGBdxfYcU&ab_channel=UlbiTV'
          target='_blank'
        >
          <SocialIcon type='facebook' />
        </Link>
        <Link
          to='https://www.youtube.com/watch?v=c3JGBdxfYcU&ab_channel=UlbiTV'
          target='_blank'
        >
          <SocialIcon type='youtube' />
        </Link>
        <Link
          to='https://www.youtube.com/watch?v=c3JGBdxfYcU&ab_channel=UlbiTV'
          target='_blank'
        >
          <SocialIcon type='linkedIn' />
        </Link>
        <Link
          to='https://www.youtube.com/watch?v=c3JGBdxfYcU&ab_channel=UlbiTV'
          target='_blank'
        >
          <SocialIcon type='skype' />
        </Link>
      </div>
    </div>
  )
}
