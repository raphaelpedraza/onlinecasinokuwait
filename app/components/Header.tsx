"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from '../Newstyles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.topMenuWrapper}>

      {/* ================= Desktop ================= */}
      <div className={styles.desktopMainWrapper}>
        <div className={styles.desktopWrapper}>

          {/* LEFT: Logo + Links */}
          <div className={styles.desktopLeft}>
            <a href="#">
              <span className={styles.logo}>
                <Image
                  src="/images/live-score-outlined-d2c38.webp"
                  alt="livescore"
                  width={103}
                  height={18}
                />
              </span>
            </a>

            <div className={styles.desktopLinksWrapper}>
              <a href="/en/" className={styles.menuLink}>Scores</a>
              <a href="/en/news/" className={styles.menuLink}>News</a>
              <a
                href="/en/football/favourites/matches/"
                className={styles.menuLink}
              >
                Favourites
              </a>
            </div>
          </div>

          {/* RIGHT: Settings */}
          <div className={styles.desktopRight}>
            <a href="/en/settings/" className={styles.desktopIconItem}>
              <Image
                src="/images/settings-274a9.png"
                alt="Settings"
                width={13}
                height={13}
              />
            </a>
          </div>

        </div>
      </div>

      {/* ================= Mobile ================= */}
      <div className={styles.mobileWrapper}>
        <div className={styles.mobileLeft}>

          <div className={`${styles.mobileIcon} ${styles.mobileBurger}`}>
            <span />
            <span />
            <span />
          </div>

          <a href="/en/">
            <span className={styles.logo}>
              <Image
                src="/images/live-score-outlined-d2c38.webp"
                alt="livescore"
                width={103}
                height={18}
              />
            </span>
          </a>

        </div>
      </div>

    </header>
  );
}


