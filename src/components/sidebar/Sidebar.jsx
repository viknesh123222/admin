import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SwipeRightIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { AuthContext } from "../../context/AuthContext";
import { Link,useNavigate ,NavLink} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { user }=useContext(AuthContext)

  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const handleclick=()=>{
    navigate("/users/test")
  }
  const handleClicK=()=>{
    navigate("/")
  }
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span onClick={handleClicK}>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <Link to="/getall" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Booking Details</span>
            </li>
          </Link>
       
          <Link to="/Date" style={{ textDecoration: "none" }}>
          <li>
            <SwipeRightIcon className="icon" />
            <span>Travel Bookings</span>
          </li>
          </Link>
          <Link to="/MahalTable" style={{ textDecoration: "none" }}>
          <li>
            <SwipeRightIcon className="icon" />
            <span>Mahal Bookings</span>
          </li>
          </Link>
          <Link to="/Lodgetable" style={{ textDecoration: "none" }}>
          <li>
            <SwipeRightIcon className="icon" />
            <span>Lodge Booking</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <button className="navButton" onClick={handleclick}>Profile</button>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            { 
                 user ?( <div  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}> <span className="username"> Hello,Admin {user.username}</span>
                  
                 <button className="navButton" onClick={handleClick}>Log Out</button> 
                 
                 </div>
                 
                    
                   ) :  (
                    <div className="navItems">
                    
                    <button className="navButton"><NavLink
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </NavLink></button>
                </div>)}
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};
export default Sidebar;
