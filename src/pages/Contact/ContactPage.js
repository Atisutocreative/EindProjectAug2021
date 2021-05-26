import React from "react";
import SildeShow from "../../components/Sildeshow/Sildeshow";
import styles from "./Contact.module.css";
import Contact from "../../components/Contact/Contact";

const ContactPage = () => {
    return (
        <>
            <SildeShow/>
            <div className={styles["container"]}>
                <div className={styles["contact-wrapper"]} id={styles["box-a"]}>
                    <h1>Contact Pagina</h1>
                </div>
                <div className={styles["contact-wrapper"]} id={styles["box-b"]}>
                    <Contact/>.
                </div>
            </div>
        </>
    )
}

export default ContactPage;