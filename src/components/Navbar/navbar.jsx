import { use, useState } from "react";
import sign from "../../assets/Images/Sign.png"
import signLight from "../../assets/Images/SignLight.png"

function Navbar({darkMode  , toggleTheme}) {

    // States
    const [isOpen, setIsOpen] = useState(false)

    // Sidebar
    function sideBarStatus() {
        setIsOpen(!isOpen);
    }

    // Close sidebar
    function closeSideBar() {
        setIsOpen(false)
    }
    return (
        <nav className={`bg-[#FCFCFB] dark:bg-[#0B0D0C] text-[#171B20] dark:text-[#F4F1E8] border-[#E5E8E3] dark:border-[#273029] px-10 lg:px-44 py-4 flex items-center justify-between border-[0_0_2px_0]  sticky top-0 transition-all duration-300`}>
            <img src={darkMode ? sign : signLight } className="w-25" alt="" />
            <div className={`px-7 w-80 ${isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"} absolute left-0 top-0 h-screen bg-[#FCFCFB] dark:bg-[#111613] dark:lg:bg-transparent flex flex-col lg:tranl lg:static lg:h-auto lg:w-auto lg:inline lg:bg-transparent transition duration-700`}>
                <div className="flex justify-between items-center mb-9 lg:mb-0">
                    <h1 className="text-[#171B20] dark:text-[#F4F1E8] text-4xl font-[Space-Grotesk] lg:hidden">Portfolio</h1>
                    <button onClick={closeSideBar} className="text-[#171B20] dark:text-[#A7ADA5] border-[#171B20] dark:border-[#273029] hover:text-[#98A0AA] dark:hover:text-[#9FE870] hover:border-[#98A0AA] dark:hover:border-[#9FE870] hover:shadow-[#98A0AA] dark:hover:shadow-[#9FE870] mt-2.5 ml-2.5 mb-2.5  lg:hidden transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <a className="inter my-2.5 mx-3 lg:mx-7 text-lg text-[#171B20] dark:text-[#A7ADA5] md:inline hover:text-[#98A0AA] dark:hover:text-[#9FE870] hover:text-shadow-[0_0_15px] hover:text-shadow-[#98A0AA] dark:hover:text-shadow-[#9FE870] transition-all duration-300" href="#hero" onClick={closeSideBar}>Home</a>
                <a className="inter my-2.5 mx-3 lg:mx-7 text-lg text-[#171B20] dark:text-[#A7ADA5] md:inline hover:text-[#98A0AA] dark:hover:text-[#9FE870] hover:text-shadow-[0_0_15px] hover:text-shadow-[#98A0AA] dark:hover:text-shadow-[#9FE870] transition-all duration-300" href="#about" onClick={closeSideBar}>About</a>
                <a className="inter my-2.5 mx-3 lg:mx-7 text-lg text-[#171B20] dark:text-[#A7ADA5] md:inline hover:text-[#98A0AA] dark:hover:text-[#9FE870] hover:text-shadow-[0_0_15px] hover:text-shadow-[#98A0AA] dark:hover:text-shadow-[#9FE870] transition-all duration-300" href="#skills" onClick={closeSideBar}>Skills</a>
                <a className="inter my-2.5 mx-3 lg:mx-7 text-lg text-[#171B20] dark:text-[#A7ADA5] md:inline hover:text-[#98A0AA] dark:hover:text-[#9FE870] hover:text-shadow-[0_0_15px] hover:text-shadow-[#98A0AA] dark:hover:text-shadow-[#9FE870] transition-all duration-300" href="#projects" onClick={closeSideBar}>Projects</a>
            </div>
            <div>
                <button onClick={toggleTheme} className="text-[#171B20] dark:text-[#A7ADA5] border-[#171B20] dark:border-[#273029] hover:text-[#98A0AA] dark:hover:text-[#9FE870] hover:border-[#98A0AA] dark:hover:border-[#9FE870] hover:shadow-[#98A0AA] dark:hover:shadow-[#9FE870] border p-2 rounded-md  mr-10 lg:mr-0   hover:shadow-[0_0_15px]  transition-all duration-300">
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    )}
                </button>
                <button onClick={sideBarStatus} className="text-[#171B20] dark:text-[#A7ADA5] border-[#171B20] dark:border-[#273029] hover:text-[#98A0AA] dark:hover:text-[#9FE870] hover:border-[#98A0AA] dark:hover:border-[#9FE870] hover:shadow-[#98A0AA] dark:hover:shadow-[#9FE870] inline lg:hidden transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;