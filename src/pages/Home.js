import React from "react";
import Navbar from "../components/Navbar";
import { MinusIcon } from '@heroicons/react/solid';
import About from "../components/home/About";
import MeetOurTeam from "../components/home/MeetOurTime";
import LatestBlogs from "../components/home/LatestBlogs";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <div>
            <Navbar />

            <div className="w-full h-96 relative bg-blue-50 flex justify-center items-center">
                <div className=" items-center flex w-7/12 justify-evenly">
                    <div>
                        <img className="w-60" src={require("../assetsTra/Group 16136@2x@2x.png")} alt=""></img>
                    </div>
                    <div className="w-96 ">
                        <h1 className="text-blue-900 font-bold">HI THERE !</h1>
                        <h1 className="text-xl h-10 text-blue-900 font-bold ">We are an Alterra Academy</h1>
                        <h1 className="text-blue-700 font-semibold">Alterra Academy Full-stack Program is Coding Bootcamp which transform you being professional Software Engineer within 3 months.</h1>
                        <br />
                        <div className="bg-orange-500 rounded-3xl w-52 h-10 flex justify-center">
                            <a href="https://www.google.com/" className="flex items-center w-36 justify-around">
                                <img className="w-5" src={require("../assetsTra/sport-team.png")} alt=""></img>
                                <h1 className="text-sm text-white opacity-90">More About Team</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-20 flex justify-center relative bottom-3 ">
                <div className="w-2/4 h-28 shadow-lg shadow-gray-300 flex justify-center rounded-full justify-items-start">
                    <div className="w-4/5 flex justify-center items-center">
                        <div className="w-full flex justify-between">
                            <div className="w-36 flex justify-around items-center">
                                <div className="w-9 h-9 bg-orange-500 flex justify-center items-center rounded-full">
                                    <img className="w-6 h-6" src={require("../assetsTra/reward.png")} alt=""></img>
                                </div>
                                <div>
                                    <h1 className="text-blue-800 font-bold">4 Years Job</h1>
                                    <p className="text-sm text-blue-700">Experience</p>
                                </div>
                            </div>
                            <div className="border-x border-gray-400"></div>
                            <div className="w-40 flex justify-around items-center">
                                <div className="w-9 h-9 bg-orange-500 flex justify-center items-center rounded-full">
                                    <img className="w-6 h-6" src={require("../assetsTra/project.png")} alt=""></img>
                                </div>
                                <div>
                                    <h1 className="text-blue-800 font-bold">500+ Projects</h1>
                                    <p className="text-sm text-blue-700">Completed</p>
                                </div>
                            </div>
                            <div className="border-x border-gray-400"></div>
                            <div className="w-32 flex justify-around items-center">
                                <div className="w-9 h-9 bg-orange-500 flex justify-center items-center rounded-full">
                                    <img className="w-6 h-6" src={require("../assetsTra/support.png")} alt=""></img>
                                </div>
                                <div>
                                    <h1 className="text-blue-800 font-bold">Support</h1>
                                    <p className="text-sm text-blue-700">Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <div className="flex justify-center items-center">
                <MinusIcon className="w-9 text-orange-400 bold" />
                <h1 className="text-3xl text-blue-900 font-bold">About</h1>
                <MinusIcon className="w-9 text-orange-400 bold" />
            </div>

            <br/>
            <br/>
            <About />

            <br/>
            <br/>
            <div className="absolute -z-20">
                <img className="w-44" src={require("../assetsTra/ornament_batik.png")} alt=""></img>
            </div>
            <div className="flex flex-col justify-center items-center ">
                <div className="flex justify-center">
                    <MinusIcon className="w-9 text-orange-400 bold" />
                    <h1 className="text-3xl text-blue-900 font-bold">Meet Our Team</h1>
                    <MinusIcon className="w-9 text-orange-400 bold" />
                </div>
                <div>
                    <h1 className="text-base text-blue-900 font-medium">Our Team Consists Only of the Best Talents</h1>
                </div>
            </div>

            <br/>
            <br/>
            <MeetOurTeam />

            <br/>
            <br/>
            <br/>
            <LatestBlogs />

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />

        </div>

    )
}

export default Home