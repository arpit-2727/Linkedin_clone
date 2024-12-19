import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);  // Get user from Redux state

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      
      {/* Render Avatar only if user is available */}
      {avatar && user && (
        <Avatar
          className="headerOption__icon"
          src={user.photoUrl}  // Only show if user exists
          style={{ fontSize: "10px" }}
        >
          {user?.email ? user.email[0].toUpperCase() : ""}
        </Avatar>
      )}

      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};
export default HeaderOption;
