import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import styles from './App.module.css';
import Header from "../Header/Header";
import HomePage from "../../pages/home/HomePage";
import SearchPage from "../../pages/search/SearchPage";
import Footer from "../Footer/Footer";
import TopicsPage from "../../pages/topics/TopicsPage";
import AboutPage from "../../pages/about/AboutPage";
import IntroPage from "../../pages/Intro/IntroPage";
import ContactPage from "../../pages/Contact/ContactPage";
import PublicRoute from "../Privateroute/PublicRoute";
import PrivateRoute from "../Privateroute/PrivateRoute";

class App extends Component {

    render() {
        return (
            <Router>
                <Header/>
                <main className={styles['main-content']}>
                    <Switch>
                        <PublicRoute restricted={false} component={IntroPage} path="/" exact/>
                        <PublicRoute restricted={false} component={HomePage} path="/inloggen" exact/>
                        <PrivateRoute component={SearchPage} path="/search"/>
                        <PrivateRoute component={TopicsPage} path="/topic"/>
                        <PrivateRoute component={AboutPage} path="/about"/>
                        <PublicRoute restricted={false} component={ContactPage} path="/contact" exact/>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        );
    }
}

export default App;
