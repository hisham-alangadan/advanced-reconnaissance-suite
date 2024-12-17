import { Navbar, Options } from "@/components";

export default function Script_selection() {
    return (
        <div className="bg-background1 w-full h-full">
            <Navbar />
            
            {/* Script Selection */}
            <div className="flex flex-col justify-center">
                <div className="font-nicomoji text-5xl text-center p-[2vw]">Script selection</div>
                <div className="bg-gradient-to-br from-background1 to-green-600 w-[60vw] h-[60vh] p-1 ml-[20vw]">
                    <div className="bg-background1 w-full h-full">
                        <div className="bg-[#008F11]/15 w-full h-full grid grid-cols-2 *:w-[90%] *:h-[90%] *:mx-auto *:my-auto">
                            <Options text="Check SSL Certificate" />
                            <Options text="Check Reflected XSS Vulnerability" />
                            <Options text="Check XSS" />
                            <Options text="Check Cache Control Vulnerability" />
                            <Options text="Check Click Jacking" />
                            <Options text="Check Server Info Vulnerability" />
                            <Options text="Check Insecure Mixed Content" />
                            <Options text="Check Cache Poising Vulnerability" />
                            <Options text="Check HSTS Vulnerability" />
                            <Options text="Check CORS Vulnerability" />
                        </div>
                    </div>
                </div>
            </div>
            <button>Custom Scripts</button> <br />
            <button>Submit</button>
        </div>
    )
}