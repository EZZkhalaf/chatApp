import React from "react";
import './SlideBar.css';
import { FaSearch } from "react-icons/fa";

export const Search = () =>{
    return (
        <>  <div>
                <form className="flex items-center gap-2 ">
                    <input type="text " placeholder="Search" className="input input-bordered rounded-full h-9" />
                    <button type="submit" className="btn btn-circle bg-slate-300 text-white w-9 h-9">
                        <FaSearch className="w-4 h-4 outline-none"/>
                    </button>
                </form>
            </div>
        </>

    );


}