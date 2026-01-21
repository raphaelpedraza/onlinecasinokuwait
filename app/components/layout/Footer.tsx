import styles from "./Footer.module.css";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinksContainer}>
        <div className={styles.footerLinksCol}>
            <h4 className={styles.footerLinkTitle}>Football</h4>
            <a className={styles.footerLink}>Premier League Scores</a>
            <a className={styles.footerLink}>Premier League Standings</a>
            <a className={styles.footerLink}>La Liga Scores</a>
            <a className={styles.footerLink}>Bundesliga Scores</a>
            <a className={styles.footerLink}>Championship Scores</a>
            <a className={styles.footerLink}>Serie A Scores</a>
        </div>

        <div className={styles.footerLinksCol}>
            <h4 className={styles.footerLinkTitle}>Other Sports</h4>
            <a className={styles.footerLink}>Cricket Scores</a>
            <a className={styles.footerLink}>Tennis Scores</a>
            <a className={styles.footerLink}>Basketball Scores</a>
            <a className={styles.footerLink}>Ice Hockey Scores</a>
        </div>
            
        <div className={styles.footerLinksCol}>
            <h4 className={styles.footerLinkTitle}>Trending</h4>
            <a className={styles.footerLink}>Today&apos;s Football Scores</a>
            <a className={styles.footerLink}>Football on TV</a>
            <a className={styles.footerLink}>Champions League Scores</a>
            <a className={styles.footerLink}>FA Cup Scores</a>
            <a className={styles.footerLink}>IPL Scores</a>
            <a className={styles.footerLink}>NBA Scores</a>
        </div>
        
        <div className={styles.footerLinksCol}>
            <h4 className={styles.footerLinkTitle}>Betting</h4>    
            <a className={styles.footerLink}>Betting Sites UK</a>
            <a className={styles.footerLink}>Betting Sites IN</a>
            <a className={styles.footerLink}>Betting Sites US</a>
            <a className={styles.footerLink}>NFL Betting Sites</a>
            <a className={styles.footerLink}>Betting Sites ZA</a>
            <a className={styles.footerLink}>Betting Sites CA</a>
        </div>
        
        <div className={styles.footerLinksCol}>
            <h4 className={styles.footerLinkTitle}>Casino</h4>
            <a className={styles.footerLink}>Casino Sites UK</a>
            <a className={styles.footerLink}>Free Spins UK</a>
            <a className={styles.footerLink}>Bingo Sites UK</a>
            <a className={styles.footerLink}>Free Spins ZA</a>
            <a className={styles.footerLink}>Free Spins US</a>
            <a className={styles.footerLink}>Casino Sites CA</a>
        </div>
        
        <div className={styles.footerLinksCol}>
        </div>
        
      </div>

      <div className={styles.footerDivider}></div>

      <div className={styles.footerLowerSection}>
        <div className={styles.footerLowerMenuRow}>
            <div className={styles.footerLogosContainer}>
                <Image
                    src="/images/layout/live-score-logo.webp"
                    alt="Live Score Logo"
                    width={107}
                    height={18}
                    priority
                />  

                <div className={styles.footerLogosRow}>
                    <Image
                        src="/images/layout/app-store-download.svg"
                        alt="Live Score Logo"
                        width={120}
                        height={32}
                        priority
                    />  
                    <Image
                        src="/images/layout/google-play-white-badge.webp"
                        alt="Live Score Logo"
                        width={120}
                        height={32}
                        priority
                    />  

                </div>
            </div>

            <div className={styles.footerNavContainer}>
                <a>FAQ</a>
                <a>Contact</a>
                <a>Privacy Notice</a>
                <a>Advertise</a>
            </div>
        </div>

        <div className={styles.footerCopyrightSection}>
            <div className={styles.footerCenteredRow}>
                © 1998-2026 LiveScore Limited
            </div>

            <div className={styles.footerCenteredRow}>
                <a>Careers</a>
                <a>News Publishers</a>
                <a>Cookie Policy</a>
                <a>Terms of Use</a>
                <a>Modern Slavery Statement</a>
                <a>Corporate</a>
                
            </div>
        </div>
      </div>

        © {new Date().getFullYear()} My App
      
    </footer>
  );
}



