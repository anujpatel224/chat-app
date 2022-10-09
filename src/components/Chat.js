import React, { useState, useEffect, useRef } from "react";

const style = {
  main: `flex flex-col  p-[10x] relative`,
};
const Chat = () => {
  const scoll = useRef();
  return (
    <>
      <main className={style.main}>// chat message component</main>
      // send message component
      <span ref={scoll}></span>
    </>
  );
};

export default Chat;
