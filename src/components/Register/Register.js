import React, {useState} from "react";
import {useForm} from "react-hook-form";
import styles from "./Register.module.css";
import app from "../../Modules/Firebase";
const db = app.firestore();

export const validateEmail = (value) => {
    if (value.includes("@")) {
        return true
    } else {
        return `Uw email dient een "@" te bevatten.`
    }
};

const Register = () => {

    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm();
    const passWords = watch(["password", "checkPassword"]);
    const [succes, setSucces] = useState(false)
    const [emailinuse, setEmailinuse] = useState(false);
    const onFormSubmit = async (data) => {
        reset();

        try {
            const response = await app.auth().createUserWithEmailAndPassword(data.email, data.password);

            await db.collection("userInformation-new").doc(response.user.uid).set({
                city: data.city,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            })
                .then(() => {
                    setSucces(true)
                })

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setEmailinuse(true)
            }
        }
    }

    const validatePassWordMatch = (value) => {
        if (passWords[0] === value) {
            return true
        } else {
            return "Voer hetzelfde wachtwoord in."
        }
    }

    return (
        <>
            {succes ? <h3>Je bent Geregisteerd</h3> :
                <>
                    <div>
                        <form className={styles["register-form"]} onSubmit={handleSubmit(onFormSubmit)}>
                            <div>
                                <h1>Registreer</h1>
                            </div>

                            <div className={styles["display-error"]}>
                                <label htmlFor="first-name"></label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="first-name"
                                    placeholder="Voornaam"
                                    {...register(
                                        "firstName", {
                                            required: {
                                                value: true,
                                                message: "Verplicht veld"
                                            },
                                        }
                                    )}
                                />
                                {errors.firstName && <p>{errors.firstName.message}</p>}
                            </div>

                            <div className={styles["display-error"]}>
                                <label htmlFor="last-name"></label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="last-name"
                                    placeholder="Achternaam"
                                    {...register(
                                        "lastName", {
                                            required: {
                                                value: true,
                                                message: "Verplicht veld"
                                            },
                                        }
                                    )}
                                />
                                {errors.lastName && <p>{errors.lastName.message}</p>}
                            </div>

                            <div className={styles["display-error"]}>
                                <label htmlFor="city-details"></label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city-details"
                                    placeholder="Woonplaats"
                                    {...register(
                                        "city", {
                                            required: {
                                                value: true,
                                                message: "Voer je woonplaats"
                                            },
                                        }
                                    )}
                                />
                                {errors.city && <p>{errors.city.message}</p>}
                            </div>

                            <div className={styles["display-error"]}>
                                <label htmlFor="email-details"></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email-details"
                                    placeholder="E-mailadres"
                                    {...register(
                                        "email", {
                                            required: "Voer je e-mailadres in",
                                            validate: validateEmail,
                                        }
                                    )}
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                                {emailinuse && <p>Emailadres is al in gebruik,<br /> Je kan hiermee Inloggen</p>}
                            </div>

                            <div className={styles["display-error"]}>
                                <label htmlFor="psw-details"></label>
                                <input
                                    type="password"
                                    name="password"
                                    id="psw-details"
                                    placeholder="Wachtwoord"
                                    {...register(
                                        "password", {
                                            required: {
                                                value: true,
                                                message: "Verplicht veld"
                                            },
                                            minLength: {
                                                value: 8,
                                                message: "Dient uit minimaal 8 karakters te bestaan"
                                            },
                                            pattern: {
                                                value: /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$/,
                                                message: "Minimaal 1 hoofdletter, kleine letter en cijfer"
                                            },
                                        }
                                    )}
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>

                            <div className={styles["display-error"]}>
                                <label htmlFor="check-psw-details"></label>
                                <input
                                    type="password"
                                    name="checkPassword"
                                    id="check-psw-details"
                                    placeholder="Herhaal wachtwoord"
                                    {...register(
                                        "checkPassword", {
                                            required: "herhaal wachtwoord",
                                            validate: validatePassWordMatch
                                        }
                                    )}
                                />
                                {errors.checkPassword && <p>{errors.checkPassword.message}</p>}
                            </div>

                            <div className={styles["display-error"]}>
                                <p id="loginmelding2"></p>
                            </div>

                            <button className={styles["btreg"]}
                                    type="submit"
                            ><span>Verzend</span>
                            </button>

                        </form>
                    </div>

                </>
            }
        </>
    )
}


export default Register;