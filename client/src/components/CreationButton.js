import React from 'react';

import PopUpForm from './PopUpForm';
import * as api from '../api/api_calls';

class CreationButton extends React.Component {
    constructor() {
        super();
        this.state = {
            popUpVisible: false
        };
        this.togglePopUp = this.togglePopUp.bind(this);
    }

    togglePopUp() {
        this.setState((prevState) => {
            return {popUpVisible: !prevState.popUpVisible};
        });
    }

    render() {
        return (
            <div>
                <div className="form-zone">
                    <button className="create-button" onClick={this.togglePopUp}>Create a Post</button>
                </div>
                {this.state.popUpVisible ? <PopUpForm togglePopUp={this.togglePopUp} /> : null}
            </div>
        );
    }
}

export default CreationButton;