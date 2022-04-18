import React from "react";
import { MinusIcon } from "@heroicons/react/solid";

const LatestBlogs = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <MinusIcon className="w-9 text-orange-400 bold" />
                <h1 className="text-3xl text-blue-900 font-bold">Latest Blogs</h1>
                <MinusIcon className="w-9 text-orange-400 bold" />
            </div>
            
            <br/>
            <br/>
            <br/>

            <div className="w-full flex justify-center">
                <div className="w-4/5 flex justify-between">
                    <div className="w-64 h-4/5">
                        <img src={require("../../assetsTra/img_article.jpg")} alt=""></img>
                        <br/>
                        <div className="h-56 flex flex-wrap">
                            <div className="w-4/5">
                                <h1 className="text-blue-900 font-bold">CREATE A WORDPRESS THEME FROM SCRATCH</h1>
                            </div>
                            <div className="w-full flex justify-between text-sm text-larry">
                                <p>Larry Stark</p>
                                <p>7 Januari 2020</p>
                            </div>
                            <div>
                                <p className="text-blue-900 font-normal text-sm">Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat…</p>
                            </div>
                            <div className="w-full flex justify-end ">
                                <a href="https://google.com">
                                    <u className="text-blue-900 font-normal text-sm hover:cursor-pointer hover:text-orange-500">Read More</u>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-64 h-4/5">
                        <img src={require("../../assetsTra/img_article.jpg")} alt=""></img>
                        <br/>
                        <div className="h-56 flex flex-wrap">
                            <div className="w-4/5">
                                <h1 className="text-blue-900 font-bold">CREATE A WORDPRESS THEME FROM SCRATCH</h1>
                            </div>
                            <div className="w-full flex justify-between text-sm text-larry">
                                <p>Larry Stark</p>
                                <p>7 Januari 2020</p>
                            </div>
                            <div>
                                <p className="text-blue-900 font-normal text-sm">Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat…</p>
                            </div>
                            <div className="w-full flex justify-end ">
                                <a href="https://google.com">
                                    <u className="text-blue-900 font-normal text-sm hover:cursor-pointer hover:text-orange-500">Read More</u>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-64 h-4/5">
                        <img src={require("../../assetsTra/img_article.jpg")} alt=""></img>
                        <br/>
                        <div className="h-56 flex flex-wrap">
                            <div className="w-4/5">
                                <h1 className="text-blue-900 font-bold">CREATE A WORDPRESS THEME FROM SCRATCH</h1>
                            </div>
                            <div className="w-full flex justify-between text-sm text-larry">
                                <p>Larry Stark</p>
                                <p>7 Januari 2020</p>
                            </div>
                            <div>
                                <p className="text-blue-900 font-normal text-sm">Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat…</p>
                            </div>
                            <div className="w-full flex justify-end ">
                                <a href="https://google.com">
                                    <u className="text-blue-900 font-normal text-sm hover:cursor-pointer hover:text-orange-500">Read More</u>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    )
}

export default LatestBlogs;