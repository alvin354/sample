import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const MeetOurTeam = () => {
    return(
        <div>

            <div className="w-full h-80 flex justify-center">
                <div className="w-9/12 h-96 flex justify-between items-center">
                    <div className="h-80 grid ">
                        <img className="w-48" src={require("../../assetsTra/shutterstock_796346011@2x.png")} alt=""></img>
                        <br/>
                        <div className="flex-col">
                            <h1 className="text-orange-500 flex justify-center font-semibold">Aulia Rahmani</h1>
                            <h1 className="text-blue-800 flex justify-center text-sm font-medium">UI UX Designer</h1>
                        </div>
                        <div className="h-56 w-48 border-8 border-orange-600 relative bottom-72 right-3"></div>
                    </div>
                    <div className="h-96">
                        <div className="h-48 grid">
                            <img className="w-48 shadow-lg shadow-slate-500" src={require("../../assetsTra/shutterstock_796346011@2x.png")} alt=""></img>
                            <br/>
                            <div className="flex-col">
                                <h1 className="text-orange-500 flex justify-center font-semibold">Cindy Felita</h1>
                                <h1 className="text-blue-800 flex justify-center text-sm font-medium">Backend Development</h1>
                            </div>
                            <div className="h-56 w-48 border-8 border-orange-600 relative bottom-72 right-3"></div>
                        </div>
                    </div>
                    <div className="h-80 grid">
                        <img className="w-48" src={require("../../assetsTra/shutterstock_796346011@2x.png")} alt=""></img>
                        <br/>
                        <div className="flex-col">
                            <h1 className="text-orange-500 flex justify-center font-semibold">Winda Pramesti</h1>
                            <h1 className="text-blue-800 flex justify-center text-sm font-medium">Frontend Development</h1>
                        </div>

                        
                        <div className="h-56 w-48 border-8 border-orange-600 relative bottom-72 right-3"></div>
                        
                        
                    </div>
                </div>
            </div>
            
            <br/>
            <div className="w-full h-10 flex justify-center">
                <div className="w-3/4 flex items-center">
                    <div className="w-full flex justify-end">
                        <div className="w-28 flex justify-around">
                            <h1 className="text-blue-900 text-sm font-bold hover:text-orange-500 hover:cursor-pointer">Check Now</h1>
                            <ArrowRightIcon className="w-5 text-blue-900 font-bold hover:text-orange-500 hover:cursor-pointer"/>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetOurTeam;