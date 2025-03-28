import { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar";

const About = () => {
    const [scale, setScale] = useState(0.72);
    const [isClickedBT, setIsClickedBT] = useState(true);
    const [isClickedBB, setIsClickedBB] = useState(true);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            const newScale = Math.min(1, 0.72 + (width - 768) / 3000); 
            setScale(newScale);
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    const handleToggleBT = () => {
        setIsClickedBT((prev) => !prev);
    };    

    const handleToggleBB = () => {
        setIsClickedBB((prev) => !prev);
    };    

    return (
        <div>
            <NavBar/>
            <div className="flex justify-center items-center h-screen relative bottom-[2rem] sm:bottom-0">
                <div style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
                    <div className="grid grid-cols-3 gap-4 p-3 w-[33rem] sm:w-[55rem]">
                        
                        <div className="col-span-3 flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-[60%] h-32 bg-[rgb(30,30,30)] rounded-lg border-[3px] border-[rgb(40,40,40)] p-2 flex flex-col justify-center text-[1.5rem]">
                                <div className="flex items-center justify-between">
                                    <p className="text-[8rem]">👋🏽</p>
                                    <div>
                                        <p className="font-Tech">FRONT END WEB DEVELOPER</p>
                                        <p className="font-Tech">GREATER MANCHESTER, UK</p>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                                            <p className="font-Tech">AVAILABLE FOR WORK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleToggleBT}
                                aria-label="Toggle workout details"
                                role="button"
                                className="cursor-pointer w-full sm:w-[40%] h-32 bg-[rgb(30,30,30)] rounded-lg border-[3px] border-[rgb(40,40,40)] p-2 flex flex-col justify-center text-center text-[1.5rem]"
                            >
                                {isClickedBT ? (
                                    <p className="text-[8rem]">🏋🏽‍♂️</p>
                                ) : (
                                    <>
                                        <p className="font-Tech">WHEN I'M NOT CODING,</p>
                                        <p className="font-Tech">I'M LIFTING</p>
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="col-span-3 bg-[rgb(30,30,30)] rounded-lg border-[3px] border-[rgb(40,40,40)] p-2 flex font-Tech text-center text-[1.5rem]">
                            AFTER GRADUATING FROM STAFFORDSHIRE UNIVERSITY AND EARNING A BACHELOR'S IN COMPUTER GAMES DESIGN, I EXPANDED MY SKILLS BY EXPLORING NEW TOOLS AND PROGRAMMING LANGUAGES WHICH LED ME TO SPEND OVER A YEAR LEARNING AND HONING MY WEB DEVELOPMENT SKILLS. I FOUND THE PERFECT BLEND OF CREATIVITY AND PROBLEM-SOLVING IN FRONT-END DEVELOPMENT AND I NOW FOCUS ON BUILDING DYNAMIC, USER-FRIENDLY APPLICATIONS. I PRIORITIZE CLEAN, MAINTAINABLE CODE AND INTUITIVE DESIGN, ENSURING ACCESSIBILITY AND RESPONSIVENESS IN EVERY PROJECT.
                        </div>

                        <div className="col-span-3 flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-[40%] h-32 flex flex-col justify-between">
                                <div className="h-[45%] flex justify-between">
                                    <img src="/html.png" alt="html" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)] rounded-tl-lg border-t-[3px] border-l-[3px] border-[rgb(40,40,40)]"/>
                                    <img src="/css.png" alt="css" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)] border-t-[3px] border-[rgb(40,40,40)]"/>
                                    <img src="/js.png" alt="java script" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)] border-t-[3px] border-[rgb(40,40,40)]"/>
                                    <img src="/ts.png" alt="type script" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)] border-t-[3px] border-[rgb(40,40,40)]"/>
                                    <img src="/react.png" alt="react" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)] rounded-tr-lg border-t-[3px] border-r-[3px] border-[rgb(40,40,40)]"/>
                                </div>
                                
                                <div className="h-[45%] flex justify-between">
                                    <img src="/tw.png" alt="tail wind" className="p-2 h-full bg-[rgb(30,30,30)] rounded-bl-lg border-b-[3px] border-l-[3px] border-[rgb(40,40,40)]"/>
                                    <img src="" alt="" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)]  border-b-[3px] border-[rgb(40,40,40)]"/>
                                    <img src="" alt="" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)] border-b-[3px] border-[rgb(40,40,40)]"/>
                                    <img src="" alt="" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)] border-b-[3px] border-[rgb(40,40,40)]"/>
                                    <img src="" alt="" className="p-2 h-full min-w-[3.6rem] bg-[rgb(30,30,30)] rounded-br-lg border-b-[3px] border-r-[3px] border-[rgb(40,40,40)]"/>
                                </div>
                            </div>

                            <button
                                onClick={handleToggleBB}
                                aria-label="Toggle learning details"
                                role="button"
                                className="cursor-pointer w-full sm:w-[65%] h-32 bg-[rgb(30,30,30)] rounded-lg border-[3px] border-[rgb(40,40,40)] p-2 flex flex-col justify-center text-center text-[1.5rem]"
                            >
                                {isClickedBB ? (
                                    <p className="text-[9.5rem] mt-[8px]">🧠</p>
                                ) : (
                                    <>
                                        <p className="font-Tech">CURRENTLY LEARNING NEXT.JS FOR BACKEND</p>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
