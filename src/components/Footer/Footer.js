import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles["page"]}>
                <div className={styles["footer-container"]}>
                    <h1>Get The Picture</h1>
                    <h6>No Copyright 2021</h6>
                </div>
        </div>
    )
}
export default Footer;