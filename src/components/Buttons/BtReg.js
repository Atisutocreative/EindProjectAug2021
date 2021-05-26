import React from "react";
import {Link} from "react-router-dom";
import styles from "./BtReg.module.css";

const BtReg = () => {

    return (
            <button
                className={styles["btmain"]}
                type="button"><span>Register</span></button>
        </Link>
    )
}

export default BtReg;