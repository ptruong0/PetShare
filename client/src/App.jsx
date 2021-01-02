import React from 'react';

import Header from './components/Header.jsx';
import CreationButton from './components/CreationButton.jsx';
import PostGrid from './components/PostGrid.jsx';

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