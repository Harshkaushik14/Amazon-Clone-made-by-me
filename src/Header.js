import React from "react";
import Logo from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketSharpIcon from '@material-ui/icons/ShoppingBasketSharp';
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
const [{ basket , user }, dispatch] = useStateValue();

const handleAuthentication = () => {
  if(user){
    auth.signOut();
  }

};

  return (
    <nav className="header">
      {/*Logo on the left */} 
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>

      {/* Search Box */}
      <div className="header_search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* 1st link*/}

        <Link to={!user && "/login"} className="header__Link">
          <div className="header__Option"  onClick= {handleAuthentication}>
            <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
              </span>
          </div>
        </Link>

        {/* 2nd link*/}
        <Link to="/" className="header__Link">
          <div className="header__Option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>

        {/* 3rd link*/}
        <Link to="/" className="header__Link">
          <div className="header__Option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th link*/}
        <Link to="/checkout" className="header__Link">
          <div className="header__optionBasket">
            
            <ShoppingBasketSharpIcon className="shopping__basket"/>
            
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
     
    </nav>
  );
}

export default Header;
