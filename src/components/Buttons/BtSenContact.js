import React from "react";
import styles from "./BtSenContact.module.css"

const BtnSendContact = () => {

    return (
        <div>
            <button
                className={styles["btmain"]}
                type="submit"><span>Verzenden</span></button>
        </div>
    )
}

export default BtnSendContact;