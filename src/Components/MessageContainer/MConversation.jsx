

import React from "react";
import Messages from './Messages.jsx';
import './Message.css';
import { MessageInp } from "./MessageInp.jsx";
const MConversation = () => {
  return (
    <>
    <div className="flex flex-col space-y-4 border-2 border-white width69">
      <div className="md:min-w-[450px] flex bg-blue-500 items-center ">
        <span className="label-text text-white  ml-3">To:</span>
        <span className="text-gray-50 font-bold ml-5"> fat cat</span>
      </div>

      {/* Adding space between the recipient and Messages component */}
        <Messages />
        <MessageInp />
    </div>
    </>
  );
};


export default MConversation;