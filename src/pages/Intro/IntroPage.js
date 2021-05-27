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
                        <h1>Welkom</h1>
                        <p><span className={styles["highlight"]}>Leuk dat op de onze Many Search site komt!</span></p>
                        <p>De site is ontstaan omdat wij vaak op stockfoto’s zoeken maar niet steeds wilden wisselen van site maar de foto’s naast elkaar wilde zien van verschillende aanbieders. In deze site zijn nu <span className={styles["highlight"]}>Shutterstock en Unsplash</span> toevoegt waar je met 1 zoekwoord de resultaten mooi naast elkaar ziet van beide.</p>
                        <p>Als je nog niet geregistreerd bent kan je de pagina’s 'Get The Picture' | 'Topics' | 'About' nog niet zien. Dus <span className={styles["highlight"]}>registeer je</span> om van alle faciliteiten te kunnen gebruiken. Indien je opmerking/suggesties heb vul dan het contactformulier in en stuur ons een bericht.</p>
                        <h1>Enjoy</h1>
                        <div className={styles["intro-button"]}>
                            {this.state.isLogin ?
                                <button
                                    className={styles["btintro"]}
                                    onClick={() => this.handleLogout()}><span>Uitloggen</span></button>
                                : <Link className={styles["btintro"]} to="/inloggen"><span>Inloggen | Registreren</span></Link>
                            }
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default IntroPage;