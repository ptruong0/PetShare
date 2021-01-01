import React from 'react';

import getAllPets from '../api/api_calls';

class PostGrid extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        getAllPets();
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default PostGrid;