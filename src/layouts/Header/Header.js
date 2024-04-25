import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/img/argentBankLogo.webp";
import "./Header.css";
import { logoutUser } from '../../actions/user.action';
import { fetchUserProfile } from '../../actions/user.action';



const Header = () =>{ 
   const tokenLocalStorage = localStorage.getItem('token');
   const tokenSessionStorage = sessionStorage.getItem('token');
   const token = tokenLocalStorage || tokenSessionStorage;
   const userProfile = useSelector((state) => state.user.userProfile);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleSignOut = (e) => {
      e.preventDefault();
      dispatch(logoutUser());
      navigate('/');
   };

   useEffect(() => {
      dispatch(fetchUserProfile());
   }, [dispatch]);


   return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="./">
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {token ? (
               <>
               <div>
                  <Link className="main-nav-item" to="/User" >
                     <i className="fa fa-user-circle icon-header"></i>
                     {!userProfile.userName ? <>{userProfile.firstName}</> : <>{userProfile.userName}</>}
                  </Link>
                  <Link className="main-nav-item" to="/Login" onClick={handleSignOut}>
                     <i className="fa fa-sign-out icon-header"></i>
                     Sign Out
                  </Link>
               </div>
               </>
            ) : (
               <Link to="/Login" className="main-nav-item">
                  <i className="fa fa-user-circle icon-header"></i>
                  Sign In
               </Link>
            )}
      </nav>
    );
  }
export default Header;