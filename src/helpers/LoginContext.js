import {createContext, useContext, useEffect, useState} from "react";
import app from "../Modules/Firebase";

export const LoginAuth = createContext({});

const LoginContext = (props) => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {

            try {
                await app.auth().onAuthStateChanged((user) => {
                    if (user) {
                        setAuthUser(user);
                    } else {
                        setAuthUser(null);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }
        getUser();

    }, []);

    const login = async (data) => {
        app.auth().signInWithEmailAndPassword(data.email, data.password).then(data => {
            console.log("gelukt");
            return data.user.getIdToken();
        })
            .then(console.log("iets"))

            .catch(e => {
                    console.error(e);
                if (e.code === 'auth/user-not-found') {
                    console.error("Je staat niet in ons systeem, registeer je eerst");
                }
                    if (e.code === 'auth/wrong-password') {
                        console.error("wachtwoord verkeerd");
                    }
                }
            );
    }

    const logOut = () => {
        app.auth().signOut()
    };

    const valueProvider = {
        authUser,
        setAuthUser,
        login,
        logOut
    };

    return <LoginAuth.Provider value={valueProvider}>
        {props.children}
    </LoginAuth.Provider>
}

export const useAuth = () => {
    return useContext(LoginAuth);
}

export default LoginContext;