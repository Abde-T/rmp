import React from 'react';
import SideBar from '../Home page components/SideBar';
import Featured from '../Home page components/Featured';

function HomePage(props) {
    return (
        <div>
            <SideBar/>
            <Featured/>
        </div>
    );
}

export default HomePage;