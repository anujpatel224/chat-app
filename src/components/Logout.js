import React from "react";
import { auth } from "../firebase.js";

const style = {
  button: `bg-gray-400 px-4 py-2 hover:bg-gray-100`,
};

const Logout = () => {
  return (
    <button className={style.button} onClick={() => auth.signOut()}>
      Logout 😣
    </button>
  );
};
export default Logout;
