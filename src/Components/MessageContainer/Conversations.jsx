import React from "react";
import Conversation1 from "./Conversation1";
import './Message.css';

export const Conversations = () =>{
    return (
        <div>
            <div className="py-2 px-4 flex flex-col flex-1 overflow-auto">
            <Conversation1 />
            <Conversation1 />
            <Conversation1 />
            <Conversation1 />
            <Conversation1 />

                
                
            </div>
        </div>
      

    );


}