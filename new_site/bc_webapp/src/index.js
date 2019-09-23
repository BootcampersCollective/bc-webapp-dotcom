import React from 'react';
import ReactDOM from 'react-dom';
// import CommentDetail from './CommentDetail';
// import ApprovalCard from './ApprovalCard';
import Home from './Home';
import Navigation from './Navigation';

const App = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Home></Home>
            
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));