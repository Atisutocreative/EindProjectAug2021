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
                    <h2>Many Search</h2>
                    <h2>Telefoon | 06012345678</h2>
                    <h2>Email | many@search.nl</h2>
                    <h2>Adres | Many Search Laan 99</h2>
                    <h2>Woonplaats | Many Searcherdam</h2>
                    <h2>KvK | 29041972</h2>
                    <h2>BTW | 9876543210</h2>
                    <h2>Bank | MS MJTV90 1245975154</h2>
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