import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./Components/Auth/Login/Login";
import Home from "./Components/Home/Home";

function App() {
  return (

    <>
     <Router>
       <Switch>
         <Route path="/home">
          <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
       </Switch>
     </Router>
    </>

  );
}

export default App;
