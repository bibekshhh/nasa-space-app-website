import CountDown from "../Countdown/CountdownMain"

const HeroSection = () => {

    return(
        <>
        <div class="pt-4 md:pt-20 lg:pt-28 relative before:opacity-[.1] overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 before:bg-[url('https://i.ibb.co/DRRGgXZ/Website-Art.jpg')]">
        <div class="max-w-[85rem] h-[95vh] lg:h-[85vh] mx-auto px-4 sm:px-6 lg:px-8 pt-36 ">

            <CountDown />

            <div class="mt-5 max-w-2xl text-center mx-auto">
            <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                Let's Build
                <span class="bg-clip-text text-[#DD210A]"> Together</span>
            </h1>
            </div>

            <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-lg text-gray-600 dark:text-gray-400">Embark on a Journey of Innovation and Exploration at the NASA Space App Challenge – Where Enthusiasts, Coders, and Dreamers Unite to Solve Cosmic Mysteries, Build Cutting-Edge Apps, and Shape the Future of Space Technology for the Betterment of Our Planet and Beyond.</p>
            </div>

            <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
            <a class="inline-flex justify-center items-center gap-x-3 text-center px-8 bg-white text-black  border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                Get started
                <svg class="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </a>
            
            </div>

        </div>
        </div>
        </>
    )
}

export default HeroSection
