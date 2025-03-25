import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="relative top-[1.5rem] sm:flex sm:justify-center sm:gap-2 lg:gap-6">
            <div className="flex justify-center gap-5 sm:gap-2 lg:gap-6 mb-4 sm:mb-0 whitespace-nowrap">
                <Link to="/" className="cursor-pointer font-Tech sm:text-[1.5rem] border-b-[2.5px] border-transparent hover:border-white">
                    [ HOME ]
                </Link>
                <Link to="/about" className="cursor-pointer font-Tech sm:text-[1.5rem] border-b-[2.5px] border-transparent hover:border-white">
                    [ ABOUT ]
                </Link>
                <Link to="/projects" className="cursor-pointer font-Tech sm:text-[1.5rem] border-b-[2.5px] border-transparent hover:border-white">
                    [ PROJECTS ]
                </Link>
            </div>
            <div className="flex justify-center gap-5 sm:gap-2 lg:gap-6 h-full whitespace-nowrap">
                <Link to="/contact" className="cursor-pointer font-Tech sm:text-[1.5rem] border-b-[2.5px] border-transparent hover:border-white">
                    [ CONTACT ]
                </Link>
                <a 
                    href="/cv.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer font-Tech sm:text-[1.5rem] border-b-[2.5px] border-transparent hover:border-white"
                >
                    [ CV ]
                </a>
            </div>
        </div>
    );
};

export default NavBar;
