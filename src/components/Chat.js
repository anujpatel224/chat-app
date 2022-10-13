import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
const style = {
  main: `flex flex-col  p-[20x] relative mb-5`,
  scroll:`p-8`
};
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  useEffect(()=>{
    scroll.current?.scrollIntoView();
  },[messages])
  return (
    <>
      <main className={style.main}>
        {/*  chat message component */}
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div className={style.scroll} ref={scroll}></div>
      </main>
      {/* send message component */}
      <SendMessage scroll ={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
