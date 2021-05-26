import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"

const Header = () => {

    return (
        <>
            <header className={styles["main-header"]}>
                <img id={styles["box-a"]} className={styles["logo"]} src={logo} alt="Logo Many Search"></img>

                <nav id={styles["box-b"]} className={styles["header-nav"]}>
                    <ul className={styles["header-list"]}>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["current-page"]}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/inloggen" activeClassName={styles["current-page"]}>Inloggen</NavLink>
                        </li>
                        <li>
                            <NavLink to="/search" activeClassName={styles["current-page"]}>Get The Picture</NavLink>
                        </li>
                        <li>
                            <NavLink to="/topic" activeClassName={styles["current-page"]}>Topics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName={styles["current-page"]}>Over ons</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName={styles["current-page"]}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header