import React from "react";
import styles from "./CominSoon.module.css";
import pixabay from "../../assets/pixabay.png";
import istock from "../../assets/Istock.jpg";
import sphoto from "../../assets/StockPhotoSecrets.jpg";


const ComingSoon = () => {
    return (
        <div>
            <h1>Coming Soon!</h1>
            <img className={styles["picture"]}  alt="Atisuto" src={pixabay}></img>
            <img className={styles["picture"]} alt="Atisuto" src={istock}></img>
            <img className={styles["picture"]} alt="Atisuto" src={sphoto}></img>
            <h2>Video Search</h2>
            <h2>Music Search</h2>
            <h2>Font Search</h2>
        </div>
    )
};

export default ComingSoon;