import React from "react";
import './Message.css';

 const Conversation1 = () =>{
    return (
        
        <div>
                <div className="flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-1 cursor-pointer">
                    <div className="avatar online">
                        <div className="w-10 h-10 rounded-full ">
                            <img src="https://avatar.iran.liara.run/public/34" alt="user " className="roundPhoto"/>
                            
                        </div>
                    
                    </div>
                
                    <div className="flex flex-col flex-1">
                        <div className="flex gap-3 justify-between">
                            <p className="font-mono text-gray-300"> fat cat</p>
                            <span className="text-x1">👻</span>
                        </div>
                    </div>


                <div className="divider my-0 py-0 h-1"/>

                </div>
            </div>
        

    );


}

export default Conversation1;