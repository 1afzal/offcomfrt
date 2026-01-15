import React from "react";
import MiniProduct from "./MiniProduct";

function Landing(){
    return(
        <div className="m-2 h-screen flex flex-col">
            <div className="h-16">
                <nav className="flex justify-between font-black  ">
                    <div>
                        <ul className="flex gap-3">
                            <li>HOME</li>
                            <li>TRAINING PIECES</li>
                            <li>WAFFLE-001</li>
                            <li>HENLEY-001</li>
                            <li>CONTACT</li>

                        </ul>
                    </div>
                    <div className="font-black flex gap-3 mr-5">
                        <p>ACCOUNT</p>
                        <p>CART</p>
                    </div>

                </nav>
            </div>

            <div className="flex-1 text-6xl flex justify-center items-center font-black ">
                <h1>Hope you do good in life.</h1>
            </div>
            <div className="h-16">
                <button className="bg-black text-white px-2 py-1">
                    EXPLORE
                </button>
            </div>

        </div>
    )
}
export default Landing;
