import React from 'react';
import Image from 'next/image';
import styles from '../Newstyles/Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_content}>
                    <div className={styles.footer_menu}>
                        <div>
                            <h4 className={styles.menu_title}>Football</h4>
                            <ul className={styles.menu_list}>
                                <li><a href="#">Premier League Scores</a></li>
                                <li><a href="#">Premier League Standings</a></li>
                                <li><a href="#">La Liga Scores</a></li>
                                <li><a href="#">Bundesliga Scores</a></li>
                                <li><a href="#">Championship Scores</a></li>
                                <li><a href="#">Serie A Scores</a></li>
                                </ul>
                        </div>
                        <div>
                            <h4 className={styles.menu_title}>Other Sports</h4>
                            <ul className={styles.menu_list}>
                                <li><a href="#">Cricket Scores</a></li>
                                <li><a href="#">Tennis Scores</a></li>
                                <li><a href="#">Basketball Scores</a></li>
                                <li><a href="#">Ice Hockey Scores</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={styles.menu_title}>Trending</h4>
                            <ul className={styles.menu_list}>
                                <li><a href="#">Today's Football Scores</a></li>
                                <li><a href="#">Football on TV</a></li>
                                <li><a href="#">Champions League Scores</a></li>
                                <li><a href="#">FA Cup Scores</a></li>
                                <li><a href="#">IPL Scores</a></li>
                                <li><a href="#">NBA Scores</a></li>
                                </ul>
                        </div>
                        <div>
                            <h4 className={styles.menu_title}>Betting</h4>
                            <ul className={styles.menu_list}>
                                <li><a href="#">Betting Sites UK</a></li>
                                <li><a href="#">Betting Sites IN</a></li>
                                <li><a href="#">Betting Sites US</a></li>
                                <li><a href="#">NFL Betting Sites</a></li>
                                <li><a href="#">Betting Sites ZA</a></li>
                                <li><a href="#">Betting Sites CA</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className={styles.menu_title}>Casino</h4>
                            <ul className={styles.menu_list}>
                                <li><a href="#">Casino Sites UK</a></li>
                                <li><a href="#">Free Spins UK</a></li>
                                <li><a href="#">Bingo Sites UK</a></li>
                                <li><a href="#">Free Spins ZA</a></li>
                                <li><a href="#">Free Spins US</a></li>
                                <li><a href="#">Casino Sites CA</a></li>
                                </ul>
                        </div>
                    </div>
                    <div className={styles.footer_divider} ></div>
                    <div className={styles.footer_bottom}>
                        <div className={styles.footer_bottom_content}>
                            <div className={styles.footer_logoandapps}>
                                <Image 
                                src="/images/live-score-outlined-d2c38.webp"
                                alt="LiveScore Logo" 
                                width={107} 
                                height={18} 
                                />

                                <div className={styles.footer_apps}>
                                    <a href="#">
                                        <Image 
                                        src="/images/google-play.webp"
                                        alt="Google Play Store"
                                        width={120}
                                        height={40}
                                        />
                                    </a>

                                    <a href="#">
                                        <Image 
                                        src="/images/apple-store.svg"
                                        alt="Apple App Store"
                                        width={120}
                                        height={40}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.footer_legalLinks}>
                                <a href="#">FAQ</a>
                                <a href="#">Contact</a>
                                <a href="#">Privacy Notice</a>
                                <a href="#">Advertise</a>
                            </div>
                        </div>
                        <div className={styles.footer_copyright}>
                            <span>© 1998-{currentYear} LiveScore Limited</span>
                        </div>
                        <div className={styles.footer_corporate}>
                            <a href="#">Careers</a>
                            <a href="#">News Publisher</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Modern Slavery Statement</a>
                            <a href="#">Corporate</a>
                        </div>
                        <div className={styles.footer_partnerships}>
                            <div className={styles.LanguagesWrapper}>
                                <div className={styles.languageSelector}>
                                    <Image 
                                    src="/images/flag-en-ZA.webp"
                                    alt="Select Language"
                                    width={16}
                                    height={16}
                                    />
                                    <span>South Africa</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 11 32" 
                                        width="8" 
                                        height="16"
                                        fill="currentColor"
                                        className="dropdown-icon"
                                        >
                                        <path d="M10.65 16.99q0 .23-.18.41l-8.34 8.34q-.18.18-.41.18t-.41-.18l-.9-.9q-.18-.18-.18-.4t.18-.42l7.03-7.03L.41 9.96q-.18-.18-.18-.42t.18-.4l.9-.9q.17-.18.4-.18t.42.18l8.34 8.33q.18.18.18.42z" />
                                    </svg>
                                </div>
                            </div>

                            <div className={styles.partnershipsLogos}>
                                <div className={styles.logoblock}>
                                    <a href="#">
                                        <Image 
                                        src="/images/gam-stop-logo.svg"
                                        alt="Gam Stop Logo"
                                        width={116}
                                        height={23}
                                        />
                                    </a>
                                    <Image 
                                        src="/images/18-plus-icon.svg"
                                        alt="18 Plus Logo"
                                        width={116}
                                        height={23}
                                        />
                                    <a href="#">
                                        <Image 
                                        src="/images/gamble-aware-logo.svg"
                                        alt="Gamble Aware Logo"
                                        width={26}
                                        height={26}
                                        />
                                    </a><a href="#">
                                        <Image 
                                        src="/images/raig-logo.svg"
                                        alt="RAIG Logo"
                                        width={116}
                                        height={23}
                                        />
                                    </a><a href="#">
                                        <Image 
                                        src="/images/gambling-therapy-logo.svg"
                                        alt="Gambling Therapy Logo"
                                        width={116}
                                        height={23}
                                        />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}