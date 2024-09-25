import React from 'react'
import styles from './style/style.module.css'
import { MdKeyboardArrowRight } from "react-icons/md";


export default function DjSnowHeader() {
  return (
    <div className={styles.djSnowHeader}>
        <div className={styles.header_text}>
            <h2><span className={styles.dj_text}>DJ</span> Snow</h2>
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia architecto 
            obcaecati distinctio sint explicabo at quisquam sed dicta fuga deleniti amet, nesciunt
            odit, earum dolorem vitae, ea rerum iusto.
            </p>
            <div className={styles.contact_header}>
                <p>CONTACT ME </p>
                <div><MdKeyboardArrowRight color='black'/></div>
            </div>
        </div>
        <div>
            <img src="dj_snow.png" className={styles.dj_snow} alt="dj_snow_picture" />
        </div>
    </div>
  )
}
