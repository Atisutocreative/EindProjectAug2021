import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import styles from "./Login.module.css"
import SignIn from "../Privateroute/SignIn";
import app from "../../Modules/Firebase";

const Login = () => {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const history = useHistory();

    const loginHandler = async (data) => {
        app.auth().signInWithEmailAndPassword(data.email, data.password).then(data => {
            history.push("/search")
            return data.user.getIdToken();
        })

            .catch(e => {

                    console.error(e);
                    if (e.code === 'auth/user-not-found') {
                        console.error("gebruiker bestaat niet");
                        document.getElementById('loginmelding').innerHTML = "Je staat niet in ons systeem, registeer je eerst";
                    }
                    if (e.code === 'auth/wrong-password') {
                        console.error("wachtwoord verkeerd");
                        document.getElementById('loginmelding').innerHTML = "wachtwoord verkeerd";
                        errors.loginfout = 1;
                    }
                }
            );
    }

    return (
        <div>
            <form onSubmit={handleSubmit(loginHandler)} className={styles["login-form"]}>
                <div>
                    <h1>Inloggen</h1>
                </div>

                <div className={styles["logindisplay-error"]}>
                    <label htmlFor="email-input"></label>
                    <input type="email"
                           name="email"
                           id="email-input"
                           placeholder="Email"
                           {...register("email", {required: true})}
                           aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p>Verplicht veld</p>}
                </div>

                <div className={styles["logindisplay-error"]}>
                    <label htmlFor="passWordInput"></label>
                    <input type="password"
                           name="password"
                           id="passWordInput"
                           placeholder="Wachtwoord"
                           aria-invalid={errors.password ? "true" : "false"}
                           {...register("password", {required: true})}
                    />
                    {errors.password && <p>Verplicht veld</p>}
                </div>

                <div className={styles["logindisplay-error"]}>
                    <p id="loginmelding"></p>
                </div>

                <div>
                    <SignIn/>
                </div>

            </form>
        </div>
    )
};

export default Login