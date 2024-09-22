import React from "react";
import Gender from "./Gender";
import './Register.css';


const Register = () =>{

    return (
        <>
            <div class="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                    <h1 className="text-3x1 font-semibold text-center text-gray-300"> 
                        Register <span className="text-green-500"> Fatcat</span>
                    </h1>
                    <form>
                    <label className="label p-2 ">
                        <span className="text-base label-text text-primary">full name </span>
                        <input type="text " placeholder="maybe ezz" className="w-full input input-bordered h-10" />
                    </label>

                    <label className="label p-2 ">
                        <span className="text-base label-text text-primary">user name </span>
                        <input type="text " placeholder="pick a unique one" className="w-full input input-bordered h-10" />
                    </label>

                    <label className="label p-2 ">
                        <span className="text-base label-text  text-primary">password  </span>
                        <input type="text " placeholder="fatcat" className="w-full input input-bordered h-10" />
                    </label>
                    

                    <Gender/>

					<a
						
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'>
					
						Already have an account?
					</a> 

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' >
							submit
						</button>
					</div>
                    </form>

                </div>
            </div>
        </>
    ); 

}

export default Register;

