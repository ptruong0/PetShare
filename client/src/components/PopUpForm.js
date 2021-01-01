import React from 'react';

import {createPet} from '../api/api_calls';

class PopUpForm extends React.Component {
    constructor() {
        super();
    }

    handleSubmit(event) {
        this.props.togglePopUp();
        const form = document.querySelector('#newPost');
        const newPet = {
            petName: form.petName.value,
            animalType: form.animalType.value,
            submittedBy: form.submittedBy.value
        }
        try {
            createPet(newPet);
        } catch(err) {
            console.log(err.message);
        }
        

    }

    render() {
        return (
            <div className="behind-form">
                <div className="form-box">
                    <button className="close-btn" onClick={this.props.togglePopUp}>
                    <i className="far fa-times-circle" size="2x"></i>
                        </button>
                    <form id="newPost" onSubmit={this.handleSubmit}>
                        <h2>Post your Pet</h2>
                        <br />
                        <label className='labels'><span className="input-label">Pet Name</span>
                            <input type="text" name="petName" placeholder="Name" />
                        </label>
                        <br />
                        <span className="animal-options">
                            <span className="input-label">Animal</span>
                            <label><input type="radio" value="dog" name="animalType" />Dog</label>
                            <label><input type="radio" value="cat" name="animalType" />Cat</label>
                            <label><input type="radio" value="bird" name="animalType" />Bird</label>
                            <label><input type="radio" value="fish" name="animalType" />Fish</label>
                        </span>
                        <br />
                        <br />
                        <label className='labels'>
                            <span className="input-label">Submitted by</span>
                            <input type="text" name="submittedBy" placeholder="Username" />
                        </label>
                        <br />
                        <input type="submit" className="submit-btn"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default PopUpForm;