import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={styles.details_container} >
          <div className={styles.box1} >
            <div className={styles.icon_img} ><img src="/instagram.svg" alt="instagram_logo" /><a className={styles.insta_link} href="#">Follow on Instagram</a></div>
            <div>
              <ul className={styles.detail_ist} >
                <li>Lorem ipsum, dolor sit amet consectetur </li>
                <li>Lorem ipsum, dolor sit amet consectetur </li>
                <li>Lorem ipsum, dolor sit amet consectetur </li>
                <li>Lorem ipsum, dolor sit amet consectetur </li>
              </ul>
            </div>
          </div>
          <div className={styles.box2} >
            <div className={styles.card} >
                <span className={styles.card__title} >Connect with Me!</span>
                <p className={styles.card__content} >Get fresh web design resources delivered straight to your inbox every week.
                </p>
                <div className={styles.card__form} >
                    <input placeholder="Contact number" type="number" />
                    <button className={styles.sign_up} >Connect</button>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className={styles.developer_sout}>
        <p>Copyright @ 2024 || Made by <strong> Hemant Kumar</strong></p>
      </div>
    </>
  )
}

export default Footer
