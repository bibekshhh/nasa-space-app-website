import { useEffect, useState } from "react";

const Announcement = () => {
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? "visible" : "hidden";

    return(
        <>
        <div className={`bg-white/[.6] ${cls} transition ease-in-out w-full backdrop-blur-lg dark:bg-slate-900/[.6]`}>
        <div className="w-full px-4 py-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
            <div className="flex items-center gap-x-3 md:gap-x-5">
                <svg className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="currentColor" className="fill-blue-600"/>
                <path d="M8 32.5V19.5C8 12.8726 13.3726 7.5 20 7.5C26.6274 7.5 32 12.8726 32 19.5C32 26.1274 26.6274 31.5 20 31.5H19" stroke="white" stroke-width="2"/>
                <path d="M12 32.5V19.66C12 15.1534 15.5817 11.5 20 11.5C24.4183 11.5 28 15.1534 28 19.66C28 24.1666 24.4183 27.82 20 27.82H19" stroke="white" stroke-width="2"/>
                <circle cx="20" cy="19.5214" r="5" fill="white"/>
                </svg>

                <div className="grow">
                <p className="md:text-xl text-gray-800 font-semibold dark:text-gray-200">
                    Get started today.
                </p>
                <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">
                    Sign up to get unlimited updates.
                </p>
                </div>
            </div>

            <div className="text-center sm:text-left flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
                <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md sm:rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm md:py-3 md:px-4" href="#">
                Free trial
                </a>
                <a className="py-[.4125rem] px-3 inline-flex justify-center items-center gap-2 rounded-md sm:rounded-full border-2 border-gray-900 font-semibold text-gray-800 hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm md:py-[.688rem] md:px-4 dark:hover:bg-white dark:border-gray-200 dark:hover:border-white dark:text-white dark:hover:text-gray-800 dark:focus:ring-white dark:focus:ring-offset-gray-800" href="#">
                Buy now
                </a>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Announcement;