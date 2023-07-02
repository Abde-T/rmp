import React from 'react';
import SideBar from '../Home page components/SideBar';
import Featured from '../Home page components/Featured';
import Nav from '../Home page components/Nav';

function HomePage(props) {
    return (
        <div className='HomePage__container'>
            <SideBar/>
            <Nav/>
            <Featured/>
        </div>
    );
}

export default HomePage;