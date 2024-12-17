import { Navbar } from "@/components";
import boxtop_svg from "../../public/output-box-top.svg"
import boxbot_svg from "../../public/output-box-bottom.svg"
import boxmidr_svg from "../../public/output-box-middle-scalable.svg"

export default function Output() {
    return (
        <div className="w-[100vw] h-[100vh] bg-background1">
            <Navbar />
            {/* <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect x="0" y="0" width="100" height="10" fill="blue" />

                <g transform="scale(1,2)">
                <circle cx="50" cy="30" r="15" fill="red" />
                </g>

                <rect x="0" y="90" width="100" height="10" fill="blue" />
                <rect x="0" y="90" width="100" height="10" fill="blue" />
            </svg> */}

            <div className="relative w-[80vw] h-auto flex flex-col *:w-full bg-[#161]">
                <div className="w-full h-full">
                    <img className="" src={boxtop_svg.src} alt="." />
                    <div className="relative flex-1">
                    <img className="absolute z-10 h-full" src={boxmidr_svg.src} alt="." />
                    <div className="pl-[5vw]">
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                        Bonjor! Je suis Output <br />
                    </div>
                    </div>
                    <img className="" src={boxbot_svg.src} alt="." />
                </div>
            </div>

        </div>
    )
}