import "./Sidebar.css";
import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice"; // Import selector to get user data

const Sidebar = () => {
  // Get the user from the Redux store
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://cdn.pixabay.com/photo/2023/02/01/21/40/pink-7761356_960_720.png"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src={user?.photoUrl} // Dynamically fetch the photo URL
        />
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2800</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">2800</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("ReactJS")}
        {recentItems("JavaScript")}
        {recentItems("C++")}
        {recentItems("Rust")}
      </div>
    </div>
  );
};

export default Sidebar;
