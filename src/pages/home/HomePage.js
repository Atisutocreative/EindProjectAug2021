import React, {Component} from "react";
import SildeShow from "../../components/Sildeshow/Sildeshow";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import styles from './HomePage.module.css';

class HomePage extends Component {

    render() {
        return (
            <>
                <SildeShow/>
                <div className={styles["container"]}>
                    <div>
                        <div className={styles["home-wrapper"]} id={styles["box-b"]}>
                            <Login/>
                        </div>
                    </div>
                    <div>
                        <div className={styles["home-wrapper"]} id={styles["box-c"]}>
                            <Register/>
                        </div>
                    </div>
                    <div id={styles["box-d"]}></div>
                </div>
            </>
        )
    }
}

export default HomePage;