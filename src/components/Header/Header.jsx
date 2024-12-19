import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { logout } from "../../features/userSlice";
import { auth } from "../firebase";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";
import { selectUser } from "../../features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);  // Get the user from Redux state
  console.log("User before logout: ", user);  // Log before logging out

  const logoutofApp = async () => {
    try {
      await auth.signOut();  // Firebase sign-out
      console.log("User signed out successfully");
      dispatch(logout());    // Dispatch logout to clear Redux state
    } catch (error) {
      console.log("Error during sign-out:", error.message);  // Log any error from Firebase sign-out
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
          alt="Linkedin Logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption 
          title="Me" 
          onClick={logoutofApp} 
          avatar={true}  
        />
      </div>
    </div>
  );
};

export default Header;
