import React from "react";
import styles from "./BtLogin.module.css"

const BtLogin = () => {
    return (
        <div>
            <button
                className={styles["btlogin"]}
                type="submit"><span>Inloggen</span></button>
        </div>
    )
}

export default BtLogin;