import styles from '../../styles/hero.module.css'
import DiffMix from './DiffMix'
import FirstSection from './FirstSection'

const Hero = () => {
  return (
    <>
        <div className={styles.hero_container} >
          <FirstSection />
          <DiffMix />
        </div>  
    </>
  )
}

export default Hero
