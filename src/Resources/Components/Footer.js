// Footer.js
import React from "react";
import styles from "./footer.module.css";
import amazonLogoFooter from './images/amazonLogoFooter.png'


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
function Footer() {
  return (
    <div className={styles.main}>
          <button className={styles.backBtn} onClick={scrollToTop}>
            Back to top
          </button>
      <div className={styles.parentDiv}>
        <div className={styles.childDiv}>
          <h3 className={styles.heading}>Get to Know Us</h3>
          <h5 className={styles.link}>About Us</h5>
          <h5 className={styles.link}>Careers</h5>
          <h5 className={styles.link}>Press Release</h5>
          <h5 className={styles.link}>Amazon Cares</h5>
          <h5 className={styles.link}>Gift a Smile</h5>
          <h5 className={styles.link}>Amazon Science</h5>
        </div>
        <div className={styles.childDiv}>
          <h3 className={styles.heading}>Connect with Us</h3>
          <h5 className={styles.link}>Facebook</h5>
          <h5 className={styles.link}>Twitter</h5>
          <h5 className={styles.link}>Instagram</h5>
        </div>
        <div className={styles.childDiv}>
          <h3 className={styles.heading}>Make Money with Us</h3>
          <h5 className={styles.link}>Sell on Amazon</h5>
          <h5 className={styles.link}>Sell under Amazon Accelerator</h5>
          <h5 className={styles.link}>Amazon Global Selling</h5>
          <h5 className={styles.link}>Become an Affiliate</h5>
          <h5 className={styles.link}>Fulfillment by Amazon</h5>
          <h5 className={styles.link}>Advertise Your Products</h5>
          <h5 className={styles.link}>Amazon Pay on Merchants</h5>
        </div>
        <div className={styles.childDiv}>
          <h3 className={styles.heading}>Let Us help You</h3>
          <h5 className={styles.link}>COVID-19 and Amazon</h5>
          <h5 className={styles.link}>Your Account</h5>
          <h5 className={styles.link}>Returns Centre</h5>
          <h5 className={styles.link}>100% Purchase Protection</h5>
          <h5 className={styles.link}>Amazon App Download</h5>
          <h5 className={styles.link}>Amazon Assistant Download</h5>
          <h5 className={styles.link}>Help</h5>
        </div>
      </div>
     <div className={styles.divider}></div>
      <div className={styles.lowerFooter}>
        <div className={styles.footerContent}>
          <img src={amazonLogoFooter} className={styles.logo} alt="Amazon Logo" />
        </div>
        <div className={styles.countryList}>
          <span className={styles.text}>Australia</span>
          <span className={styles.text}>Brazil</span>
          <span className={styles.text}>Canada</span>
          <span className={styles.text}>China</span>
          <span className={styles.text}>France</span>
          <span className={styles.text}>Germany</span>
          <span className={styles.text}>Italy</span>
          <span className={styles.text}>Japan</span>
          <span className={styles.text}>Mexico</span>
          <span className={styles.text}>Netherlands</span>
          <span className={styles.text}>Poland</span>
          <span className={styles.text}>Singapore</span>
          <span className={styles.text}>Spain</span>
          <span className={styles.text}>Turkey</span>
          <span className={styles.text}>United Arab Emirates</span>
          <span className={styles.text}>United Kingdom</span>
          <span className={styles.text}>United States</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;