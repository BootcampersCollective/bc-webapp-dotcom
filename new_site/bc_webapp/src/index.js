import React from 'react';
import ReactDOM from 'react-dom';
// import CommentDetail from './CommentDetail';
// import ApprovalCard from './ApprovalCard';
import Home from './Home_Banner/Home';
import Navigation from './Navigation';
import GetInvolved from './Get_Involved/Get_Involved';

const App = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Home></Home>
            <GetInvolved></GetInvolved>
            
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));