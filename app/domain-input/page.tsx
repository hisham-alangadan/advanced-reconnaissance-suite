import { Navbar } from "@/components";
import rect37 from "../../public/Rectangle 37.svg"
import searchIcon from "../../public/search_advanced_icon.svg"

export default function Domain_input() {
    return (
        <div className="bg-background1 w-full h-[100vh]">
            <Navbar />

            {/* Domain Input */}
            <div>
                <div className="font-nicomoji text-center text-5xl m-[2vw]">Enter the domain name</div>
                <div className="relative w-[40vw] ml-[30vw]">
                    <img className="w-full h-full" src={rect37.src} alt="." />
                    <input className="absolute top-0 left-0 w-[90%] h-full bg-transparent border-0 outline-none font-anonymus text-5xl mx-[5%]" type="text" />
                </div>
            </div>

            {/* Advanced Options */}
            <div className="group ml-[30vw] my-[10vh] w-[40vw] h-[10vh] hover:h-[50vh] transition-[height] ease-in-out delay-300 duration-500 bg-green-500/50 border-2 border-green-500 border-dashed p-[1vh]">

                <div className="relative bg-background1 w-full h-full">
                    <div className=" absolute flex flex-row group-hover:opacity-0">
                        <img className="h-[5vh]" src={searchIcon.src} alt="." />
                        <p>Advancecd Controls</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100">
                        -- wordlist <br />
                        ---- Easy <br />
                        ---- Medium <br />
                        ---- Hard<br />
                    </div>
                </div>
            </div>

            <button>
                SUbmit
            </button>
        </div>
    )
}