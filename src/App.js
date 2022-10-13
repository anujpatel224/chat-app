import React from "react";
import Navbar from "./components/Navbar.js";
// import { auth } from "./firebase.js";
// import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
const style = {
  appContainer: `max-w-[720px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[92vh] bg-silver-100 mt-10 shadow-2xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
      
    </div>
  );
}

export default App;
