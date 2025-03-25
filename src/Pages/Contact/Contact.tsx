import { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar";
import ContactForm from "./ContactForm";

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [scale, setScale] = useState(1); 

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            let newScale = 1; 

            if (width < 640) { // Below sm (mobile screens)
                newScale = Math.max(0.4, width / 800); // Dynamic scaling for small screens
            } else { // sm and larger screens
                newScale = Math.min(1, 0.45 + (width - 640) / 1350);
            }

            setScale(newScale);
        };

        updateScale(); 
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, []);

    return (
        <div>
            <NavBar/>
            <div className="flex justify-center items-center min-h-screen -mt-12">
                <div 
                    style={{ transform: `scale(${scale})`, transformOrigin: "center" }} 
                    className="min-w-[48rem] sm:min-w-[85rem] sm:h-[20rem] sm:grid grid-cols-2 gap-4"
                >
                    <div className="sm:flex flex-col justify-center mb-10 sm:mb-0">
                        <h1 className="font-Bebas text-[4.7rem] sm:text-[4rem] tracking-[0.15em] text-center sm:text-start whitespace-nowrap">
                            LET'S COLLABORATE ✨
                        </h1>

                        <div className={`flex justify-center gap-12 sm:gap-10 transition-all duration-500 sm:mr-32 ${isHovered ? "ml-0 sm:mr-[18rem]" : "sm:ml-[20%]"}`}>
                            <a href="https://github.com/NotAhad" target="_blank" rel="noopener noreferrer">
                                <img src="/github.png" alt="GitHub" className="cursor-pointer size-14 sm:size-10" />
                            </a>
                            <a href="https://www.linkedin.com/in/ahad-paracha-6625a2275/" target="_blank" rel="noopener noreferrer">
                                <img src="/linkedin.png" alt="LinkedIn" className="cursor-pointer size-14 sm:size-10" />
                            </a>

                            <div 
                                className="flex gap-2 items-center sm:w-10" 
                                onMouseEnter={() => setIsHovered(true)} 
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img src="/gmail.png" alt="Gmail" className="size-14 sm:size-10" />
                                <p className="relative top-[0.15rem] font-Tech text-[1.8rem] tracking-[0.05em] sm:tracking-[0em] sm:text-[1.5rem] sm:opacity-0 hover:opacity-100 transition-opacity duration-450">
                                    AAPARACHA09@GMAIL.COM
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
