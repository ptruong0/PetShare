import React from 'react';
import FileBase64 from 'react-file-base64';

import { createPet } from '../api/api_calls.jsx';

class PopUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            file: ""
        };
        this.saveFile = this.saveFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    saveFile(chosenFile) {
        this.setState({
            file: chosenFile.base64
        });
        console.log(this.state.file);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const form = document.querySelector('#newPost');
        console.log(this.state.file);
        const newPet = {
            petName: form.petName.value,
            animalType: form.animalType.value,
            description: form.description.value,
            submittedBy: form.submittedBy.value,
            imgSource: this.state.file
            
        }
        console.log(newPet);
        try {
            await createPet(newPet);
        } catch (err) {
            console.log(err.message);
        }
        this.props.togglePopUp();
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

                        <label className='labels'><span className="input-label col-md-4">Pet Name</span>
                            <input type="text" name="petName" placeholder="Name" className="col-md-8" />
                        </label>

                        <span className="animal-options">
                            <span className="input-label col-md-4">Animal</span>
                            <div className="col-md-8">
                                <label><input type="radio" value="dog" name="animalType" />Dog</label>
                                <label><input type="radio" value="cat" name="animalType" />Cat</label>
                                <label><input type="radio" value="bird" name="animalType" />Bird</label>
                                <label><input type="radio" value="fish" name="animalType" />Fish</label>
                                <label><input type="radio" value="rabbit" name="animalType" />Rabbit</label>
                            </div>
                        </span>

                        <label className='labels'><span className="input-label col-md-4">Upload an image!</span>
                            <FileBase64
                                type="file"
                                multiple={false}
                                onDone={(file) => this.saveFile(file)}
                            />
                        </label>

                        <label className="labels"><span className="input-label col-md-4">Description</span>
                            <textarea name="description" className="col-md-8"
                                placeholder="Age? Personality?" rows="4" cols="40"></textarea>
                        </label>

                        <label className='labels'>
                            <span className="input-label col-md-4">Submitted by</span>
                            <input type="text" name="submittedBy" placeholder="Username" className="col-md-8" />
                        </label>

                        <input type="submit" className="submit-btn" />
                    </form>
                </div>
            </div>
        );
    }
}

export default PopUpForm;