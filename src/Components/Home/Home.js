import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div className="container mt-4">
           <div className="row">
               <div className="col-md-3 border-right">
                   <Sidebar/>
               </div>
               <div className="col-md-6 border-right">
                   <div>
                        <div class="form-group">
                          <textarea className="form-control" placeholder="What's happening?" rows="5"></textarea>
                        </div>
                        <button className="btn btn-info rounded-pill px-4">Tweet</button>
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