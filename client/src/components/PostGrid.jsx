import React from 'react';

import {getAllPets} from '../api/api_calls.jsx';
import PostCard from './PostCard.jsx';

class PostGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            petPosts: []
        }
    }

    async componentDidMount() {
        let allPets = await getAllPets();   // API request
        allPets = allPets.data;
        this.setState({
            petPosts: allPets
        });
    }

    render() {
        const postComponents = this.state.petPosts.map(
            (post) => {
                return <PostCard key={post._id} post={post}/>;
            }
        )

        return (
            <div className="post-grid">
                {postComponents}
            </div>
        );
    }
}

export default PostGrid;