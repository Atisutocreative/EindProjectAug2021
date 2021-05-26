import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styles from  "./Login.module.css"
import { useAuth } from "../../helpers/LoginContext";
import SignIn from "../Privateroute/SignIn";

const Login = () => {
    const {handleSubmit, register, formState: {errors} } = useForm();
    const {fireBaseError, login} = useAuth();
    const history = useHistory();

    const loginHandler = async (data) => {

        try {
            const response = await login(data);
            // hier iets zetten dat hij fout gaat of wel goed op search pagina
           //if (login)  {
           //    return (
          //         console.log("INLOGGEN IS GELUKT");
           //}
           //     return ("test", {fireBaseError});
           // console.log(fireBaseError)
            history.push("/search")
        } catch (error) {
            console.error(error);
        }
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
                           {...register("password", { required: true })}
                    />
                    {errors.password && <p>Verplicht veld</p>}
                </div>
                <div>
                    <p>{fireBaseError}</p>
                </div>
                <div>
                    <SignIn/>

                </div>
            </form>
        </div>
    )
};

export default Login