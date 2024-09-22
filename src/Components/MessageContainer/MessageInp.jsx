import React from 'react'
import { BsSend } from "react-icons/bs";

export const MessageInp = () => {
  return (
    <>
        <form className='px-4 my-3 items-center'>
            <div className='w-full relative items-center'>
                <input type="text" 
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 text-white placeholder:text-black'
                    placeholder='Send a message'
                />
                <div className="items-center border-l-3 border-white">
                    <button type='submit' className='absolute inset-y-8 end-0 flex items-center pe-3 hover:bg-white border-l-3 border-white'>

                        <BsSend className='mb-5 rounded-full w-7 h- transform transition-transform duration-300 hover:bg-gray-500 hover:scale-110'/>
                    </button>
                </div>

            </div>

        </form>
    </>
  )
}
