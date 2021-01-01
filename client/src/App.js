import React from 'react';

import Header from './components/Header';
import CreationButton from './components/CreationButton';
import PostGrid from './components/PostGrid';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="pre-post">
                    <Header />
                <CreationButton /></div>
                
                <PostGrid />
            </div>
        );
    }
}

export default App;