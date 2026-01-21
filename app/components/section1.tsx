import Image from 'next/image';
import styles from '../Newstyles/section1.module.css';

export default function Section1() {
  return (
    <div className={styles.section1}>
      <div className={styles.pageIntro}>
        <h1>
          Best Online Casinos in South Africa 2026 - Full Guide for South African Players
        </h1>
        <p>
          Online casinos in South Africa have taken the country by storm, with residents now having access to some of the best platforms and games from wherever they are.
        </p>
        <p>
          Whether you are new to the world of online casinos or experienced, it is important that the site you play at is licenced by a reputable authority to ensure your safety and security.
        </p>
        <p>
          To find out more, including how to get started, popular games, bonuses, and more, keep reading below!
        </p>
      </div>

      <div className={styles.trustedNotes} >
        <div className={styles.trustedBadge}>
          <div>
            <Image
              src="/images/flag-en-ZA.webp"
              alt="flag-en-ZA"
              width={33}
              height={24}
              style={{ 
                width: '33px', 
                height: '24px', // This overrides the 'auto' from global CSS
                objectFit: 'contain'
              }}
            />

            
          <span>Safe for ZA Players</span>
          </div>
          <div>
            <Image
              src="/images/secure_trusted.webp"
              alt="trustednote-secureandtrusted"
              width={33}
              height={24}
              style={{ 
                width: '33px', 
                height: '24px', // This overrides the 'auto' from global CSS
                objectFit: 'contain'
              }}
            />
          <span>Secure & Trusted</span>
          </div>
          <div>
            <Image
              src="/images/fast_withdrawals.webp"
              alt="trustednote-fastwithdrawals"
              width={33}
              height={24}
              style={{ 
                width: '33px', 
                height: '24px', // This overrides the 'auto' from global CSS
                objectFit: 'contain'
              }}
            />
          <span>Fast Withdrawals</span>
          </div>
        </div>
      </div>

      <div className={styles.notes}>
        <h2>Best Online Casinos in South Africa 2026</h2>

        <div className={styles.pageAuthor}>
          <p className={styles.pageAuthorInfo}>
            <Image
              src="/images/App_Icons.webp"
              alt="LiveScore logo"
              width={20}
              height={20}
            />
            <span>
              By LiveScore Desk, Editorial team for sports, betting and casino
            </span>
          </p>

          <p className={styles.pageAuthorDate}>
            Last updated: 11 November 2025, 01:46 PM
          </p>
        </div>
      </div>

    </div>
  );
}
