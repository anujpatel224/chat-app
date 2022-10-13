import React from "react";
import { auth } from "../firebase.js";

const style = {
  button: `bg-transparent hover:bg-red-500 text-orange-700 font-semibold hover:text-white py-2 px-2 hover:border-transparent rounded-full"`,
};

const Logout = () => {
  return (
    <button className={style.button} onClick={() => auth.signOut()}>
      Logout 😣
    </button>
  );
};
export default Logout;
