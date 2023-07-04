import React from 'react';
import SideBar from '../Home page components/SideBar';
import Featured from '../Home page components/Featured';
import Nav from '../Home page components/Nav';
import Developers from '../Home page components/Developers';
import NewProjects from '../Home page components/NewProjects';
import Projects from '../Home page components/Projects';
import Alert from '../Home page components/Alert';

function HomePage(props) {
    return (
        <div className='HomePage__container'>
            <SideBar/>
            <Nav/>
            <Featured/>
            <Developers/>
            <NewProjects/>
            <Projects/>
            <Alert/>
        </div>
    );
}

export default HomePage;