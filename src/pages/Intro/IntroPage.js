import React, {Component} from "react";
import {logout, isLogin} from "../../components/Privateroute/utils";
import {Link} from "react-router-dom";
import SildeShow from "../../components/Sildeshow/Sildeshow";
import styles from './IntroPage.module.css'

class IntroPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <>
                <SildeShow/>
                <div className={styles["container"]}>
                    <section className={styles["intro-wrapper"]} id={styles["box-a"]}>
                        <h1>Welkom Tekst</h1>
                        <p>Lorem ipsum second wave hybrid working from home dumpster fire hurricane Greek alphabet
                            hydroxychloroquine Queen's Gambit. Mask isolation essential monolith maskne wildfires. Mr.
                            Peanut my camera is off hydroxychloroquine furlough Last Dance. Four seasons total
                            landscaping
                            social distance super-spreader event. Amazon prime sanitizer hindsight WHO. </p>
                        <div className={styles["intro-button"]}>
                            {this.state.isLogin ?
                                <button
                                    className={styles["btintro"]}
                                    onClick={() => this.handleLogout()}><span>Click here to log out</span></button>
                                : <Link className={styles["btintro"]} to="/inloggen"><span>Ga naar de inlog pagina</span></Link>
                            }
                        </div>

                    </section>

                </div>

            </>
        );
    }
}

export default IntroPage;