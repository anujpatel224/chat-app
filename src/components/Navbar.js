import React from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
// import logo from "../img/Google_Chat.png";
import Signin from "./Signin.js";
import Logout from "./Logout.js";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-cyan-300 font-serif text-3xl  `,
  username: `text-white text-2xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Gossip</h1>
      <h2 className={style.username}>
        {" "}
        {user ? "Hey " + user.displayName.split(' ')[0]: ""}{" "}
      </h2>
      {user ? <Logout /> : <Signin />}
    </div>
  );
};

export default Navbar;
