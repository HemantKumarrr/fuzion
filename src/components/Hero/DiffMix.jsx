import styles from '../../styles/DiffMix.module.css'

const DiffMix = () => {
  return (
    <>
      <div className={styles.Diff_container}>
        <div className={styles.main_box}>
            <div className={styles.heading_info}>
                <h1>How it will sound !</h1>
                <p>Here is an example of how a unmixed track sounds after mixing and mastering. </p>
            </div>
            <div className={styles.track_box} >
                <h2>UnMixed</h2>
                <audio className={styles.audio_track} controls >
                    <source src="/audio/Katta mai Dumm.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className={styles.track_box} >
                <h2>Mixed</h2>
                <audio className={styles.audio_track} controls controlsList="nodownload" >
                    <source src="/audio/Katta mai Dumm.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className={styles.track_box} >
                <h2>Master</h2>
                <audio className={styles.audio_track} controls >
                    <source src="/audio/Katta mai Dumm.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
      </div>
    </>
  )
}

export default DiffMix
