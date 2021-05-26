import React from 'react';
import {login} from './utils';
import styles from "./SignIn.module.css";


const SignIn = (props) => {

    const handleLogin = () => {
        login();
        //props.history.push('/search');
    }

    return (
            <button
                className={styles["btlogin-two"]}
                onClick={() => handleLogin()}><span>Inloggen</span>
            </button>
    );
};

export default SignIn;