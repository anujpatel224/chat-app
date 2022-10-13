import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex item-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full `,
  name: `absolute mt-[-1rem] text-gray-600 text-xs mt-8`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-br-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};
const Message = (props) => {
    const {message} = props;
    const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}` :`${style.received}`;
    const { text,name } = message;
    console.log(message);
  
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
