import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext)


  return (
    <div className="nav">
      <div className="left">
        <Link href="/" className="logo">
          <img src="./logo.png" alt="" />
          <span>City Estate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "/noavatar.jpg"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
            <div className="notification">2</div>
            <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <Link to="/login">Sign in </Link>
            <Link to="/register" className="register">
              Sign up
            </Link>{" "}
          </>
        )}

        <div className="menuIocn">
          <img
            src="./menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <Link to="#">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Agents</Link>
          <Link to="#">Sign in</Link>
          <Link to="#">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
