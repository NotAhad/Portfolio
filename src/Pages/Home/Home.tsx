import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            if (scrollRef.current) {
                event.preventDefault();
                scrollRef.current.scrollLeft += event.deltaY; // Scroll horizontally
            }
        };

        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("wheel", handleWheel);
            }
        };
    }, []);

    return (
        <div>
            <div ref={scrollRef} className="flex w-screen h-screen overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
                <div>
                    <div className="flex relative top-[1.5rem] justify-between px-[1.5rem] sm:px-[3rem] text-[1.5rem]">
                        <Link to="/about" className="font-Tech border-b-4 border-transparent hover:border-white cursor-pointer">[ ABOUT ]</Link>
                        <Link to="/projects" className="font-Tech border-b-4 border-transparent hover:border-white cursor-pointer">[ PROJECTS ]</Link>
                        <Link to="/contact" className="font-Tech border-b-4 border-transparent hover:border-white cursor-pointer">[ CONTACT ]</Link>
                        <a 
                            href="/AhadParachaCV2025.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cursor-pointer font-Tech sm:text-[1.5rem] border-b-[2.5px] border-transparent hover:border-white"
                        >
                            [ CV ]
                        </a>
                    </div>

                    <div className="-mt-24 sm:-mt-12"> 
                        <h1 className="flex h-screen items-center m-auto text-[12rem] sm:text-[35rem] font-Bebas tracking-[0.15em] px-[5rem] sm:px-[10rem]"> &lt;AHAD PARACHA&gt;</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
