import React from "react";

const About = () => {
    return(
            <div className="w-full h-96 border-2 bg-bgAbout relative">
                <div className="w-full absolute opacity-30 ">
                    <img className="w-full h-96" src={require("../../assetsTra/bg-people@2x.png")} alt=""></img>
                    
                </div>
                <div className="w-full h-96 flex justify-center">
                    <div className="border-4 flex items-center justify-center">
                        <div className="w-7/12 h-1/2 flex flex-col justify-center items-center">
                            <h1 className="text-white font-bold text-5xl leading-10 ">Alterra is For Everyone</h1>
                            <br/>
                            <p className="text-white text-lg text-center">As a brandnew Catalyst, we are aiming to become one of the best tech companies in Indonesia. Joining the tech industry in Indonesia since 2015 under the name of Sepulsa, we have evolved as a B2B tech company in 4 years providing various services such as Bill Payment Aggregator, Distribution Network, Promotion Platform, and Tech Academy.</p>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default About;