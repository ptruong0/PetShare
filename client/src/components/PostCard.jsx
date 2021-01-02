import React from 'react';


class PostCard extends React.Component {
    constructor() {
        super();
    }
    render() {
        const pet = this.props.post
        return (
            <div className="post-card col-md-3">
                <h3>{pet.petName}</h3>
                {pet.imgSource != "" ? <img src={pet.imgSource} alt="" /> : null}

                <p>{pet.animalType}</p>
                <p>{pet.submittedBy}</p>


            </div>
        );
    }
}

export default PostCard;