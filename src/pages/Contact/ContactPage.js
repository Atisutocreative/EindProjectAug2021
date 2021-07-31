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
                    <h1>Contact Gegevens</h1>
                    <h1>Many Search</h1>
                    <h4>powered by Atisuto</h4>
                    <h2>Telefoon |<a className={styles["nolink"]} href="tel:0031616937088"> 06 169 370 88</a></h2>
                    <h2>Email |<a className={styles["nolink"]} href="mailto:maarten@atisuto.nl?subject=Ik heb een vraag"> maarten@atisuto.nl</a></h2>
                    <h2>Website |<a className={styles["nolink"]} href="https://www.atisuto.nl/" target="atisuto" rel="noopener"> atisuto.nl</a></h2>
                    <h2>Adres | State 68 | 5509NX Veldhoven</h2>
                    <h2>KvK | 77427122</h2>
                    <h2>BTW | NL003200210B05</h2>
                    <h1>Nice to meet you!</h1>
                </div>
                <div className={styles["contact-wrapper"]} id={styles["box-b"]}>
                    <Contact/>
                </div>
            </div>
        </>
    )
}

export default ContactPage;