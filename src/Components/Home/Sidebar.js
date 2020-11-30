import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBookmark, faEnvelope, faHashtag, faHome, faList, faThList, faUser } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';
import twitterLogo from '../../Images/background.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar sticky-fixed">
            <ul className="navbar-nav mx-auto">
            <Link to="/"><li><img src={twitterLogo} className="logo" alt=""/></li> </Link>
               
                <li className="mt-3 sidebarStyle">  <h3><FontAwesomeIcon icon={faHome} />  Home</h3></li>
               
                <li className="mt-3 sidebarStyle"> <h3><FontAwesomeIcon icon={faHashtag} />  Explore</h3></li>
              
                <li className="mt-3 sidebarStyle"> <h3><FontAwesomeIcon icon={faBell} />  Notifications</h3></li>
                
                <li className="mt-3 sidebarStyle"><h3><FontAwesomeIcon icon={faEnvelope} />  Messages</h3></li>
               
                <li className="mt-3 sidebarStyle"><h3><FontAwesomeIcon icon={faBookmark} />  Bookmarks</h3></li>
             
                <li className="mt-3 sidebarStyle"><h3><FontAwesomeIcon icon={faList} />  Lists</h3></li>
                
                <li className="mt-3 sidebarStyle"><h3><FontAwesomeIcon icon={faUser} />  Profile</h3></li>
                
                <li className="mt-3 sidebarStyle"><h3><FontAwesomeIcon icon={faThList} />  More</h3></li>
                
                <li><button className="btn btn-info btn-block rounded-pill mt-4">Tweet</button></li>
            </ul>
        </div>
    );
};

export default Sidebar;