import React, { Component } from 'react';
import styles from "./ResultMain.module.css";

class ResultsMain extends Component {
    render() {
        return (
            <div className={styles["test"]}>
                <div key={this.props.item.id}>
                    <a href={this.props.item.assets.huge_thumb.url}>
                        <img src={this.props.item.assets.huge_thumb.url} alt="Atisuto"/>
                        <p>Description: {this.props.item.description}</p>
                        <h6>Id: {this.props.item.id}</h6>
                    </a>
                </div>
            </div>
        )
    }
}

export default ResultsMain;