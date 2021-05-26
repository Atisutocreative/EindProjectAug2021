import React, {Component} from 'react';

class TopicButtonHandler extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.searchTerm}
                    placeholder="Waar ben je op zoek naar?"

                />
                <button
                    onClick={this.props.action_click}><span>green</span></button>
            </div>
        )
    }
}

export default TopicButtonHandler;