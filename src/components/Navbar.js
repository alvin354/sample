import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-20  flex justify-around">
            <div className="w-4/5 h-full flex items-center justify-between">        
                <div className="w-36 h-20">
                    <img src={require("../assetsTra/logo-ALTA@2x.png")} alt=""></img>
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <div className="w-2/5 h-1/2 flex justify-between items-center">
                        <a href="https://learn-tech-tips.blogspot.com/</div>" ></a>
                            <h1 className="text-blue-900 font-semibold cursor-pointer hover:text-orange-500">Home</h1>
                        
                        <h1 className="text-blue-900 font-semibold cursor-pointer hover:text-orange-500 ">About</h1>
                        <h1 className="text-blue-900 font-semibold cursor-pointer hover:text-orange-500 ">Team</h1>
                        <h1 className="text-blue-900 font-semibold cursor-pointer hover:text-orange-500 ">Blog</h1>
                    </div>
                    <div className="w-2/5 flex justify-around ">
                        <div className="w-7/12 h-10 border-2 border-orange-500 text-orange-500 rounded-3xl flex justify-center items-center">Contact</div>
                    </div>
                </div>
            </div>
        </div>
    )

};



export default Navbar;
