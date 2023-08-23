import styles from '@/styles/Profile.module.scss'
import Image from 'next/image'
export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.profileInfo}>
          <h2 className={styles.title}>Profile</h2>
          <div className={styles.info}>
            <Image
              src="/img/profileImg.png"
              alt="profile"
              width={235}
              height={235}
            />
            <ul>
              <li>
                <div>your name</div>
                <div>Vasya Pupkin</div>
              </li>
              <li>
                <div>your email</div>
                <div>example@mail.com</div>
              </li>
              <button>edit profile</button>
            </ul>
          </div>
        </div>
        <div className={styles.aboutMe}>
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante
            consequat, ornare nisi et, ultrices libero. Nunc nibh dolor, maximus
            quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nulla
            ac varius.
          </p>
        </div>
      </div>
    </div>
  )
}
