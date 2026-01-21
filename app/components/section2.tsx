"use client";

import Image from 'next/image';
import styles from '../Newstyles/section2.module.css';
import { useState } from 'react';

export default function Section2() {
// 2. State to track if we show all items
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className={styles.section2}>
      <div className={styles.BrandsTable}>
        <div className={styles.tableHeader}>
          
            <span></span>
            <span>Casino</span>
            <span>Welcome Bonus</span>
            <span>Rating</span>
            <span>Payment</span>
            <span>Claim Now</span>

        </div>

          <div className={styles.BrandsTableItems}>
            <div className={styles.items} data-id="item-1">
              <div className={styles.itemInfo}>
                {/* Brand Number */}
                <span className={styles.number}>1</span>

              {/* Brand Logo */}
              <Image className={styles.brandlogo}
                src="/images/thunderbolt_casino.webp"
                alt="casino-jackpotcity"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />

              {/* Offer */}
              <div className={styles.offer}>
                <span className={styles.bestoffer}>Best Offer</span>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>R10,000 Welcome Bonus</span>
              </div>

              {/* Rating */}
              <div className={styles.rate}>
                <span className={styles.rating}>4.9/5</span>
                <span className={styles.ratingStars}>
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Half Star Selected" width={20} height={20} className={styles.halfStarSelected} />
                  <Image src="/images/star_empty.png" alt="Half Star Inactive" width={20} height={20} className={styles.halfStarInactive} />
                </span>
                <span className={styles.ratingCount}>90 ratings</span>
              </div>

                {/* Payment Logos */}
                <div className={styles.payments}>
                  <Image src="/images/bitcoin.webp" alt="payment-bitcoin" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/visa.png" alt="payment-visa" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/mastercard_debit.webp" alt="payment-mastercard_debit" width={72} height={24} style={{ objectFit: 'contain' }} />
                </div>

                {/* Claim Button */}
                <button className={styles.claimButton}>Claim Offer</button>

                
              </div>

              {/* Terms */}
              <span className={styles.terms}>*R50 min deposit to spin the wheel. T&Cs Apply.</span>
            </div>

            <div className={styles.items} data-id="item-2">
              <div className={styles.itemInfo}>
                {/* Brand Number */}
                <span className={styles.number}>2</span>

              {/* Brand Logo */}
              <Image className={styles.brandlogo}
                src="/images/casino-jackpotcity.png"
                alt="casino-jackpotcity"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />

              {/* Offer */}
              <div className={styles.offer}>
                <span>Welcome Offer up to R4000 + a Spin on the Big City Wheel</span>
              </div>

              {/* Rating */}
              <div className={styles.rate}>
                <span className={styles.rating}>4.9/5</span>
                <span className={styles.ratingStars}>
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Half Star Selected" width={20} height={20} className={styles.halfStarSelected} />
                  <Image src="/images/star_empty.png" alt="Half Star Inactive" width={20} height={20} className={styles.halfStarInactive} />
                </span>
                <span className={styles.ratingCount}>72 ratings</span>
              </div>

                {/* Payment Logos */}
                <div className={styles.payments}>
                  <Image src="/images/visa.png" alt="payment-visa" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/paypal.png" alt="payment-paypal" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/neteller.png" alt="payment-neteller" width={72} height={24} style={{ objectFit: 'contain' }} />
                </div>

                {/* Claim Button */}
                <button className={styles.claimButton}>Claim Offer</button>

              
              </div>

              {/* Terms */}
              <span className={styles.terms}>*R50 min deposit to spin the wheel. T&Cs Apply.</span>
            </div>

            <div className={styles.items} data-id="item-3">
              <div className={styles.itemInfo}>
                {/* Brand Number */}
                <span className={styles.number}>3</span>

              {/* Brand Logo */}
              <Image className={styles.brandlogo}
                src="/images/betway.webp"
                alt="casino-betway"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />

              {/* Offer */}
              <div className={styles.offer}>
                <span>Stand to Win a Share of R50 Million</span>
              </div>

              {/* Rating */}
              <div className={styles.rate}>
                <span className={styles.rating}>4.8/5</span>
                <span className={styles.ratingStars}>
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Half Star Selected" width={20} height={20} className={styles.halfStarSelected} />
                  <Image src="/images/star_empty.png" alt="Half Star Inactive" width={20} height={20} className={styles.halfStarInactive} />
                </span>
                <span className={styles.ratingCount}>65 ratings</span>
              </div>

                {/* Payment Logos */}
                <div className={styles.payments}>
                  <Image src="/images/visa.png" alt="payment-visa" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/ozow.webp" alt="payment-ozow" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/ott.webp" alt="payment-ott" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/kazang.webp" alt="payment-kazang" width={72} height={24} style={{ objectFit: 'contain' }} />
                </div>

                {/* Claim Button */}
                <button className={styles.claimButton}>Claim on Betway</button>

                
              </div>

              {/* Terms */}
              <span className={styles.terms}>18+ Please Gamble Responsibly. T&Cs Apply</span>
            </div>

            <div className={styles.items} data-id="item-4">
              <div className={styles.itemInfo}>
                {/* Brand Number */}
                <span className={styles.number}>4</span>

              {/* Brand Logo */}
              <Image className={styles.brandlogo}
                src="/images/yeti_casino.webp"
                alt="casino-yeti"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />

              {/* Offer */}
              <div className={styles.offer}>
                <span>100% up to R3,333 + 50 Free Spins</span>
              </div>

              {/* Rating */}
              <div className={styles.rate}>
                <span className={styles.rating}>4.9/5</span>
                <span className={styles.ratingStars}>
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Half Star Selected" width={20} height={20} className={styles.halfStarSelected} />
                  <Image src="/images/star_empty.png" alt="Half Star Inactive" width={20} height={20} className={styles.halfStarInactive} />
                </span>
                <span className={styles.ratingCount}>58 ratings</span>
              </div>

                {/* Payment Logos */}
                <div className={styles.payments}>
                  <Image src="/images/visa.png" alt="payment-visa" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/mastercard_debit.webp" alt="payment-mastercard" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/paypal.png" alt="payment-paypal" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/skrill.webp" alt="payment-skrill" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <span className={styles.morepayments}>+2 More</span>
                </div>

                {/* Claim Button */}
                <button className={styles.claimButton}>Claim Offer</button>

                
              </div>

              {/* Terms */}
              <span className={styles.terms}>New players only | No restrictions while playing with cash | Min. refund bonus is £10 | Wagering on bonus is 60x | Bonus based on 1st deposit lost | Max bet with bonus is £5 | Skrill and Neteller excluded |</span>
            </div>

            <div className={styles.items} data-id="item-5">
              <div className={styles.itemInfo}>
                {/* Brand Number */}
                <span className={styles.number}>5</span>

              {/* Brand Logo */}
              <Image className={styles.brandlogo}
                src="/images/hollywood_bet.webp"
                alt="casino-hollywoodbet"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />

              {/* Offer */}
              <div className={styles.offer}>
                <span>R25 Free plus 50 Free Spins on Habanero Slots</span>
              </div>

              {/* Rating */}
              <div className={styles.rate}>
                <span className={styles.rating}>5/5</span>
                <span className={styles.ratingStars}>
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                </span>
                <span className={styles.ratingCount}>57 ratings</span>
              </div>

                {/* Payment Logos */}
                <div className={styles.payments}>
                  <Image src="/images/visa.png" alt="payment-visa" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/mastercard_debit.webp" alt="payment-mastercard" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/applepay.webp" alt="payment-applepay" width={72} height={24} style={{ objectFit: 'contain' }} />
                </div>

                {/* Claim Button */}
                <button className={styles.claimButton}>Claim on Hollyweood Bets</button>

                
              </div>

              {/* Terms */}
              <span className={styles.terms}>*R50 min deposit to spin the wheel. T&Cs Apply.</span>
            </div>

            <div className={`${styles.items} ${!isExpanded ? styles.hidden : ''}`} data-id="item-6">
              <div className={styles.itemInfo}>
                {/* Brand Number */}
                <span className={styles.number}>6</span>

              {/* Brand Logo */}
              <Image className={styles.brandlogo}
                src="/images/lemon_casino.webp"
                alt="casino-lemon"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />

              {/* Offer */}
              <div className={styles.offer}>
                <span>1005 Non-Sticky Welcome Bonus up to R6,000</span>
              </div>

              {/* Rating */}
              <div className={styles.rate}>
                <span className={styles.rating}>4.7/5</span>
                <span className={styles.ratingStars}>
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                </span>
                <span className={styles.ratingCount}>45 ratings</span>
              </div>

                {/* Payment Logos */}
                <div className={styles.payments}>
                  <Image src="/images/applepay.webp" alt="payment-applepay" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/astropay.webp" alt="payment-astropay" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/bitcoin.webp" alt="payment-bitcoin" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/googlepay.webp" alt="payment-googlepay" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <span className={styles.morepayments}>+7 More</span>
                </div>

                {/* Claim Button */}
                <button className={styles.claimButton}>Claim Offer</button>

                
              </div>

              {/* Terms */}
              <span className={styles.terms}>*R50 min deposit to spin the wheel. T&Cs Apply.</span>
            </div>

            <div className={`${styles.items} ${!isExpanded ? styles.hidden : ''}`} data-id="item-7">
              <div className={styles.itemInfo}>
                {/* Brand Number */}
                <span className={styles.number}>5</span>

              {/* Brand Logo */}
              <Image className={styles.brandlogo}
                src="/images/Springbok_Casino.webp"
                alt="casino-springbok"
                width={120}
                height={50}
                style={{ objectFit: 'contain' }}
              />

              {/* Offer */}
              <div className={styles.offer}>
                <span>Welcome Bonus of R300 Free</span>
              </div>

              {/* Rating */}
              <div className={styles.rate}>
                <span className={styles.rating}>4.9/5</span>
                <span className={styles.ratingStars}>
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                  <Image src="/images/star_full.png" alt="Full Star" width={20} height={20} />
                </span>
                <span className={styles.ratingCount}>79 ratings</span>
              </div>

                {/* Payment Logos */}
                <div className={styles.payments}>
                  <Image src="/images/mastercard_debit.webp" alt="payment-mastercard" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/visa.png" alt="payment-visa" width={72} height={24} style={{ objectFit: 'contain' }} />
                  <Image src="/images/bitcoin.webp" alt="payment-bitcoin" width={72} height={24} style={{ objectFit: 'contain' }} />
                </div>

                {/* Claim Button */}
                <button className={styles.claimButton}>Claim Offer</button>

                
              </div>

              {/* Terms */}
              <span className={styles.terms}>18+. T&Cs Apply. Please Gamble Responsibly.</span>
            </div>


          </div> {/* Brands Table Items End */}
  
          <button 
          className={styles.showmore} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>

      </div>
        <div className={styles.sectionSummary}>



          <ul className={styles.bulletList}>
            <li>Thunderbolt Casino - Best Casino Overall</li>
            <li>Jackpot City Casino - Best Online Casino for Games Powered by Reputable Software Providers</li>
            <li>Betway Casino - Best Online Casino for Live Casino Games</li>
            <li>Yeti Casino - Best Online Casino for Its Broad Game Selection</li>
            <li>Hollywood Bets Casino - Best Online Casino for Slot Games Enthusiasts</li>
            <li>Lemon Casino -  Best Online Casino for Its Loyalty Program</li>
            <li>Springbok Casino - Best Online Casino for Supporting South African Rands (ZAR)</li>
          </ul>



        </div>



    </div>
  );
}
