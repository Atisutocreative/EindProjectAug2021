import React from "react";
import styles from "./Profiel.module.css";

const Profile = (props) => {

    return(
        <div className={styles["main-profile"]}>
            <form className={styles["profile-form"]}>
                <div className={styles["input-form"]}>
                    <div className={styles["display-error"]}>
                        <label htmlFor="first-name" className={styles["label-profile"]}>voornaam</label>
                        <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            value={props.profile.firstName}
                            readOnly={true}
                        />
                    </div>
                </div>

                <div>
                    <div className={styles["display-error"]}>
                        <label htmlFor="last-name" className={styles["label-profile"]}>achternaam</label>
                        <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            value={props.profile.lastName}
                            readOnly={true}

                        />
                    </div>
                </div>

                <div className={styles["input-form"]}>
                    <div className={styles["display-error"]}>
                        <label htmlFor="city-details" className={styles["label-profile"]}>plaats</label>
                        <input
                            type="text"
                            name="city"
                            id="city-details"
                            value={props.profile.city}
                            readOnly={true}
                        />
                    </div>
                </div>

                <div className={styles["input-form"]}>
                    <div className={styles["display-error"]}>
                        <label htmlFor="email-details" className={styles["label-profile"]}>emailadres</label>
                        <input
                            type="email"
                            name="email"
                            id="email-details"
                            value={props.profile.email}
                            readOnly={true}
                        />
                    </div>
                </div>

                <div>
                    <div className={styles["display-error"]}>
                        <label htmlFor="user-details" className={styles["label-profile"]}>gebruikersnaam</label>
                        <input
                            type="text"
                            name="username"
                            id="user-details"
                            value={props.profile.username}
                            readOnly={true}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile;