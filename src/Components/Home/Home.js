import React from 'react';
import './Home.css';
import Post from './Post/Post';
import Sidebar from './Sidebar';
import TweetPost from './TweetPost/TweetPost';

const Home = () => {


    return (
        <div className="container">
           <div className="row">
               <div className="col-md-3 border-right">
                   <Sidebar/>
               </div>
               <div className="news-feed col-md-6 border-right ">
                   <div className="sticky-top home-top p-3">
                    <h4 className="">Home</h4> 
                   </div>                                  
                   <div className="shadow">                                  
                        <TweetPost/>
                   </div>
                   <div className="post-card">
                       <Post />
                   </div>
               </div>
               <div className="col-md-3">
                   <input type="text" className="form-control rounded-pill" placeholder="Search Twitter"/>
               </div>
           </div>
        </div>
    );
};

export default Home;