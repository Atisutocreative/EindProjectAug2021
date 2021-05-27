import React, {Component} from 'react';
import styles from './SearchBarMain.module.css'

class SearchBar extends Component {
    render() {
        return (
            <div>

                <input className={styles["input-fields"]}
                       type="text"
                       defaultValue={this.props.value}
                       onChange={this.props.action_change}
                       placeholder="Waar ben je op zoek naar?"
                />
                <button
                    className={styles["btmain-search"]}
                    onClick={this.props.action_click}><span>Search</span>
                </button>
            </div>

        )
    }
}

export default SearchBar;