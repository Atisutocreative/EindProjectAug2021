import React from "react";
import {useForm} from "react-hook-form";
import styles from "./Contact.module.css";
import BtSenContact from "../Buttons/BtSenContact";
import app from "../../Modules/Firebase";
const db = app.firestore();


export const validateEmail = (value) => {
    if(value.includes("@")) {
        return true
    } else {
        return `Uw email dient een "@" te bevatten.`
    }
}

const Contact = () => {
    const {handleSubmit, register, formState: {errors}, reset} = useForm();

    const onFormSubmit = async (data) => {
        reset();
        try {
            await db.collection("contactForm").add({
                name: data.name,
                phone: data.phone,
                email: data.email,
                message: data.message
            });
        } catch (error) {
            console.error(errors)
        }
    }

    const validateEmail = (value) => {
        if(value.includes("@")) {
            return true
        } else {
            return 'Email adres dient een "@" te bevatten';
        }
    }

    return (
        <>
            <form className={styles["contact-form"]} onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <h1>Contact</h1>
                </div>
                    <div className={styles["contact-display-error"]}>
                        <label htmlFor="name-details"></label>
                        <input
                            type="text"
                            name="name"
                            id="name-details"
                            placeholder="Voor- en achternaam"
                            {...register(
                                "name", {
                                    required: {
                                        value: true,
                                        message: "Vul uw voor- en achternaam in"
                                    },
                                }
                            )
                            }
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className={styles["contact-display-error"]}>
                        <label htmlFor="phone-details"></label>
                        <input
                            type="text"
                            name="phone"
                            id="phone-details"
                            placeholder="Telefoonnummer"
                            {...register(
                                "phone",{
                                    required: {
                                        value: true,
                                        message: "Verplicht veld."
                                    },
                                    pattern: {
                                        value: /^((\+|00(\s|\s?\s?)?)31(\s|\s?\\s?)?(\(0\)[\s]?)?|0)[1-9]((\s|\s?\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/,
                                        message: "Voer een geldig telefoonnummer in.",
                                    },
                                }
                            )}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>
                    <div className={styles["contact-display-error"]}>
                        <label htmlFor="mail-details"></label>
                        <input
                            type="email"
                            name="email"
                            id="mail-details"
                            placeholder="Email adres"
                            {...register(
                                "email", {
                                    required: "Voer uw email adres in",
                                    validate: validateEmail
                                }
                            )
                            }
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                <div className={styles["contact-display-error"]}>
                    <label htmlFor="text-details"></label>
                    <textarea className={styles["text-contact"]}
                              name="message"
                              id="text-details"
                              rows="10"
                              cols="50"
                              placeholder="Onderwerp / Opmerking"
                              {...register(
                                  "message",{
                                      required: {
                                          value: true,
                                          message: "Verplicht veld"
                                      }
                                  }
                              )
                              }
                    >
                </textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className={styles["btn-send-contact"]}>
                    <BtSenContact/>
                </div>
            </form>
        </>

    )
};

export default Contact;