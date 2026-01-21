import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>

        <div className={styles.headerLogoWrapper}>
          <Image
            src="/images/layout/live-score-logo.webp"
            alt="Live Score Logo"
            width={120}
            height={32}
            priority
          />  
        </div>

        <div className={styles.headerNav}>
          <a className={styles.navLink}>Scores</a>
          <a className={styles.navLink}>News</a>
          <a className={styles.navLink}>Favourites</a>
        </div>

        <div className={styles.headerSettingsWrapper}>
          <Image
            src="/images/icons/settings-icon.svg"
            alt="settings"
            width={13}
            height={13}
            priority
          />  
        </div>
      </div>
    </header>
  );
}
