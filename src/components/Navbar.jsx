import React from 'react'
import styles from './style/style.module.css'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";




export default function Navbar() {
  return (
    <div>
        <div className={styles.snow_background}>
            <div className={styles.nav_header}>
                <ul className={styles.nav_links}>
                    <img src="dj_snow_logo.png" width={50} height={50} alt="logo" />
                    <h2>DJ Snow</h2>
                </ul>
                <ul className={styles.nav_links}>
                    <li className={styles.active_link}>Home</li>
                    <li>Biography</li>
                    <li>Events</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                <ul className={styles.nav_links}>
                    <FaFacebookF size={20}/>
                    <FaTwitter size={20}/>
                    <FaInstagram size={20}/>
                </ul>
            </div>
        </div>
    </div>
  )
}
