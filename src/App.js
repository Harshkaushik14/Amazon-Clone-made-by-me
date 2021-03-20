import './App.css';
import React ,{ useEffect } from 'react';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";
import Footer from './Footer';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() =>{
//will only run when the app component loads...

auth.onAuthStateChanged((authUser) => {
console.log(' THE USER IS >>> ',authUser);

if (authUser) {

  //the user is logged in / the user was logged in
  dispatch({
    type:'SET_USER',
    user: authUser,
  });
  
}else{
  // the user is logged  out
dispatch({
  type:'SET_USER',
    user: null,

});
}

});
  } , []);

  return (
      <Router>

    <div className="app">
     <Switch>
       <Route path="/Checkout">
       <Header/>
         <Checkout/>
         <Footer />
       </Route>
       <Route path="/Login">
         <Login/>
       </Route>
       {/* Default Route*/}
       <Route path="/">
     <Header/>
         <Home/>
         <Footer/>

       </Route>
     </Switch>
    </div>
      </Router>
  );
}

export default App;
