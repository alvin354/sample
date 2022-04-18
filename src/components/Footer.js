import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-32 bg-bgFoo flex justify-center items-center">
            <div className="w-4/5 flex justify-between items-center">
                <div>
                    <img className="w-32 " src={require("../assetsTra/logo-ALTA-v2@2x.png")} alt=""></img>
                </div>
                <div className="w-32 h-16 flex flex-wrap">
                    <p className="text-white opacity-70 text-sm">Social Media</p>
                    <div className="w-full flex justify-between">
                        <img className="w-5 h-5" src={require("../assetsTra/ic_fb.png")} alt=""></img>
                        <img className="w-5 h-5" src={require("../assetsTra/ic_twitter.png")} alt=""></img>
                        <img className="w-5 h-5" src={require("../assetsTra/ic_ig.png")} alt=""></img>
                        <img className="w-5 h-5" src={require("../assetsTra/ic_linkedin.png")} alt=""></img>
                    </div>
                </div>
                <div>
                    <p className="text-white opacity-70 text-sm">Copyright &copy; 2019 Alterra</p>
                </div>
            </div>
        </div>
    )
}

export default Footer