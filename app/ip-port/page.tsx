import { Navbar, Options } from "@/components";
import Link from "next/link";
import rect27 from "../../public/Rectangle 37.svg"
import port1 from "../../public/Port 1.svg"
import port2 from "../../public/Port 2.svg"
import searchIcon from "../../public/search_advanced_icon.svg"

export default function Ip_port() {
    return (
        <div className="bg-background1 h-[300vh] w-[100vw]">
            <Navbar />

            {/* IP Address */}
            <div className="flex flex-col justify-center">
                <div className="font-nicomoji text-center text-5xl p-[2vw]">Enter the IP address</div>
                <div className="relative flex justify-center w-[40vw] ml-[30vw]">
                    <img src={rect27.src} alt="." />
                    <input className="absolute top-[10%] left-[5%] w-[90%] h-[80%] bg-transparent border-0 outline-none font-nicomoji text-6xl" type="text" />
                </div>
            </div>

            {/* Port Range */}
            <div className="flex flex-col justify-center">
                <div className="font-nicomoji text-center text-5xl p-[2vw] pt-[4vw]">
                    Enter the port range
                </div>
                <div className="flex justify-center w-[50vw] ml-[25vw]">
                    <div className="relative">
                        <img className="mr-[0vw]" src={port1.src} alt="." />
                        <input className="absolute top-[10%] left-[20%] w-[90%] h-[80%] bg-transparent border-0 outline-none font-nicomoji text-6xl" type="text" />
                    </div>
                    <p className="font-nicomoji text-center align-middle m-auto text-5xl">to</p>
                    <div className="relative">
                        <img src={port2.src} alt="." />
                        <input className="absolute top-[10%] left-[20%] w-[90%] h-[80%] bg-transparent border-0 outline-none font-nicomoji text-6xl" type="text" />
                    </div>
                </div>
            </div>

            {/* Scan Type */}
            <div className="flex flex-col justify-center">
                <div className="p-[5vw] font-nicomoji text-center align-middle m-auto text-5xl">Scan Type</div>
                <div className="p-1 h-[50vh] w-[40vw] ml-[30vw] bg-gradient-to-br from-background1 to-green-700">
                    <div className="bg-background1 w-full h-full">
                        <div className="h-full w-full bg-[#008F11]/15 grid grid-cols-2 gap-4 *:w-[90%] *:mx-auto *:my-auto">
                            <Options length={2} text="Stealth Scan" />
                            <Options length={2} text="Xmas Scan" />
                            <Options length={2} text="UDP Scan" />
                            <Options length={2} text="FIN Scan" />
                            <Options length={2} text="ACK Scan" />
                            <Options length={2} text="NULL Scan" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Advanced Options */}
            <div className="group relative w-[70%] h-[10vh] ml-[15%] mt-[5vw] hover:h-[50vh] transition-[height] ease-in-out delay-300 duration-500  bg-green-500/50 p-[1vh] border-2 border-green-500 border-dashed">
            
                <div className="absolute top-0 left-0 border-t-4 border-l-4 border-green-500 w-8 h-8 transform -translate-x-4 -translate-y-4"></div>
                <div className="absolute top-0 right-0 border-t-4 border-r-4 border-green-500 w-8 h-8 transform  translate-x-4 -translate-y-4"></div>
                <div className="absolute bottom-0 left-0 border-b-4 border-l-4 border-green-500 w-8 h-8 transform -translate-x-4 translate-y-4"></div>
                <div className="absolute bottom-0 right-0 border-b-4 border-r-4 border-green-500 w-8 h-8 transform  translate-x-4 translate-y-4"></div>
                
                <div className="bg-background1 w-full h-full">            
                    <div className="absolute w-full">
                        <div className="flex flex-row h-[10vh] text-left group-hover:opacity-0 transition-[opacity] ease-in-out duration-500">
                            <img className="my-auto h-[5vh] basis-[20%]" src={searchIcon.src} alt="." />
                            <p className="my-auto basis-[80%] font-nicomoji text-4xl">Advanced Controls</p>
                        </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-[opacity] ease-in-out delay-0 group-hover:delay-700">
                            --- Version Detection
                    </div>
                </div>
            </div>

            {/* Enter button */}
            <div className="start w-[16vw]">
                <Link href="/about">
                <svg viewBox="0 0 432 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_112_63)">
                    <mask id="path-1-inside-1_112_63" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M399.176 51.199L373.14 5.04246e-05L373.14 0V5.04246e-05H351.546V0.0312933L376.445 51.199L351.546 98.877V98.8773H373.14V98.8771L399.176 51.199Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M399.176 51.199L373.14 5.04246e-05L373.14 0V5.04246e-05H351.546V0.0312933L376.445 51.199L351.546 98.877V98.8773H373.14V98.8771L399.176 51.199Z" fill="#008F11" fill-opacity="0.9"/>
                    <path d="M373.14 5.04246e-05L373.523 -0.593312L373.683 -0.489964L373.769 -0.319973L373.14 5.04246e-05ZM399.176 51.199L399.805 50.879L399.974 51.2107L399.795 51.5373L399.176 51.199ZM373.14 0H372.434V-1.29531L373.522 -0.593362L373.14 0ZM373.14 5.04246e-05H373.846V0.70607H373.14V5.04246e-05ZM351.546 5.04246e-05H350.84V-0.705969H351.546V5.04246e-05ZM351.546 0.0312933L350.911 0.34022L350.84 0.193956V0.0312933H351.546ZM376.445 51.199L377.08 50.89L377.236 51.2102L377.071 51.5258L376.445 51.199ZM351.546 98.877H350.84V98.7037L350.92 98.5501L351.546 98.877ZM351.546 98.8773V99.5833H350.84V98.8773H351.546ZM373.14 98.8773H373.846V99.5833H373.14V98.8773ZM373.14 98.8771H372.434V98.6969L372.52 98.5387L373.14 98.8771ZM373.769 -0.319973L399.805 50.879L398.546 51.519L372.511 0.320074L373.769 -0.319973ZM373.522 -0.593362L373.523 -0.593312L372.757 0.593413L372.757 0.593362L373.522 -0.593362ZM372.434 5.04246e-05V0H373.846V5.04246e-05H372.434ZM351.546 -0.705969H373.14V0.70607H351.546V-0.705969ZM350.84 0.0312933V5.04246e-05H352.252V0.0312933H350.84ZM375.81 51.5079L350.911 0.34022L352.181 -0.277633L377.08 50.89L375.81 51.5079ZM350.92 98.5501L375.819 50.8721L377.071 51.5258L352.172 99.2038L350.92 98.5501ZM350.84 98.8773V98.877H352.252V98.8773H350.84ZM373.14 99.5833H351.546V98.1712H373.14V99.5833ZM373.846 98.8771V98.8773H372.434V98.8771H373.846ZM399.795 51.5373L373.76 99.2155L372.52 98.5387L398.556 50.8606L399.795 51.5373Z" fill="#008F11" mask="url(#path-1-inside-1_112_63)"/>
                    <mask id="path-3-inside-2_112_63" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M432.135 51.1989L407.099 1.96641V0H406.099H385.505V2.08607L409.404 51.1989L385.505 96.9622V98.8772H407.099V97.0459L432.135 51.1989Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M432.135 51.1989L407.099 1.96641V0H406.099H385.505V2.08607L409.404 51.1989L385.505 96.9622V98.8772H407.099V97.0459L432.135 51.1989Z" fill="#008F11" fill-opacity="0.71"/>
                    <path d="M407.099 1.96641L406.47 2.28644L406.393 2.13562V1.96641H407.099ZM432.135 51.1989L432.764 50.8789L432.933 51.2106L432.754 51.5373L432.135 51.1989ZM407.099 0V-0.70602H407.805V0H407.099ZM385.505 0H384.799V-0.70602H385.505V0ZM385.505 2.08607L384.87 2.39499L384.799 2.24873V2.08607H385.505ZM409.404 51.1989L410.039 50.89L410.195 51.2101L410.03 51.5257L409.404 51.1989ZM385.505 96.9622H384.799V96.789L384.879 96.6354L385.505 96.9622ZM385.505 98.8772V99.5832H384.799V98.8772H385.505ZM407.099 98.8772H407.805V99.5832H407.099V98.8772ZM407.099 97.0459H406.393V96.8657L406.479 96.7076L407.099 97.0459ZM407.728 1.64639L432.764 50.8789L431.505 51.5189L406.47 2.28644L407.728 1.64639ZM407.805 0V1.96641H406.393V0H407.805ZM406.099 -0.70602H407.099V0.70602H406.099V-0.70602ZM385.505 -0.70602H406.099V0.70602H385.505V-0.70602ZM384.799 2.08607V0H386.211V2.08607H384.799ZM408.769 51.5078L384.87 2.39499L386.14 1.77714L410.039 50.89L408.769 51.5078ZM384.879 96.6354L408.778 50.8721L410.03 51.5257L386.131 97.2891L384.879 96.6354ZM384.799 98.8772V96.9622H386.211V98.8772H384.799ZM407.099 99.5832H385.505V98.1712H407.099V99.5832ZM407.805 97.0459V98.8772H406.393V97.0459H407.805ZM432.754 51.5373L407.719 97.3843L406.479 96.7076L431.515 50.8606L432.754 51.5373Z" fill="#008F11" mask="url(#path-3-inside-2_112_63)"/>
                    <mask id="path-5-inside-3_112_63" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M342.453 0H152.842H90.1461V0.288185L64.4944 51.1991L90.1461 98.7139V98.8772H90.2343L90.2646 98.9334L93.366 99.0001V98.8772H152.842H342.443H342.453V98.857L368.025 51.1434L342.453 0.021876V0Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M342.453 0H152.842H90.1461V0.288185L64.4944 51.1991L90.1461 98.7139V98.8772H90.2343L90.2646 98.9334L93.366 99.0001V98.8772H152.842H342.443H342.453V98.857L368.025 51.1434L342.453 0.021876V0Z" fill="#060040"/>
                    <path d="M342.453 0H344.572V-2.11806H342.453V0ZM90.1461 0V-2.11806H88.0281V0H90.1461ZM90.1461 0.288185L92.0376 1.24124L92.2642 0.791636V0.288185H90.1461ZM64.4944 51.1991L62.6029 50.246L62.1056 51.2329L62.6306 52.2053L64.4944 51.1991ZM90.1461 98.7139H92.2642V98.1787L92.0099 97.7077L90.1461 98.7139ZM90.1461 98.8772H88.0281V100.995H90.1461V98.8772ZM90.2343 98.8772L92.0981 97.871L91.4978 96.7591H90.2343V98.8772ZM90.2646 98.9334L88.4008 99.9396L88.9865 101.024L90.2191 101.051L90.2646 98.9334ZM93.366 99.0001L93.3205 101.118L95.4841 101.164V99.0001H93.366ZM93.366 98.8772V96.7591H91.248V98.8772H93.366ZM342.453 98.8772V100.995H344.572V98.8772H342.453ZM342.453 98.857L340.587 97.8565L340.335 98.3252V98.857H342.453ZM368.025 51.1434L369.892 52.1439L370.41 51.177L369.92 50.1958L368.025 51.1434ZM342.453 0.021876H340.335V0.522076L340.559 0.969429L342.453 0.021876ZM152.842 2.11806H342.453V-2.11806H152.842V2.11806ZM90.1461 2.11806H152.842V-2.11806H90.1461V2.11806ZM92.2642 0.288185V0H88.0281V0.288185H92.2642ZM66.3859 52.1521L92.0376 1.24124L88.2546 -0.66487L62.6029 50.246L66.3859 52.1521ZM92.0099 97.7077L66.3582 50.1929L62.6306 52.2053L88.2823 99.7201L92.0099 97.7077ZM92.2642 98.8772V98.7139H88.0281V98.8772H92.2642ZM90.2343 96.7591H90.1461V100.995H90.2343V96.7591ZM92.1284 97.9272L92.0981 97.871L88.3705 99.8834L88.4008 99.9396L92.1284 97.9272ZM93.4115 96.8825L90.3101 96.8158L90.2191 101.051L93.3205 101.118L93.4115 96.8825ZM91.248 98.8772V99.0001H95.4841V98.8772H91.248ZM152.842 96.7591H93.366V100.995H152.842V96.7591ZM342.443 96.7591H152.842V100.995H342.443V96.7591ZM342.453 96.7591H342.443V100.995H342.453V96.7591ZM340.335 98.857V98.8772H344.572V98.857H340.335ZM366.158 50.1429L340.587 97.8565L344.32 99.8575L369.892 52.1439L366.158 50.1429ZM340.559 0.969429L366.131 52.0909L369.92 50.1958L344.348 -0.925677L340.559 0.969429ZM340.335 0V0.021876H344.572V0H340.335Z" fill="#008F11" mask="url(#path-5-inside-3_112_63)"/>
                    <mask id="path-7-inside-4_112_63" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9592 51.1989L58.9949 0H58.9949H80.5888V0.0310439L55.6896 51.1989L80.5888 98.8771L80.5888 98.8772L58.9949 98.8772L32.9592 51.1989Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.9592 51.1989L58.9949 0H58.9949H80.5888V0.0310439L55.6896 51.1989L80.5888 98.8771L80.5888 98.8772L58.9949 98.8772L32.9592 51.1989Z" fill="#008F11" fill-opacity="0.9"/>
                    <path d="M58.9949 0V-0.70602H58.5619L58.3656 -0.320024L58.9949 0ZM32.9592 51.1989L32.3299 50.8789L32.1612 51.2106L32.3396 51.5373L32.9592 51.1989ZM80.5888 0H81.2948V-0.70602H80.5888V0ZM80.5888 0.0310439L81.2236 0.33997L81.2948 0.193706V0.0310439H80.5888ZM55.6896 51.1989L55.0548 50.89L54.899 51.2101L55.0638 51.5257L55.6896 51.1989ZM80.5888 98.8771L81.2627 99.0877L81.3498 98.8091L81.2146 98.5503L80.5888 98.8771ZM80.5888 98.8772L80.5888 99.5832L81.1078 99.5832L81.2627 99.0878L80.5888 98.8772ZM58.9949 98.8772L58.3753 99.2155L58.576 99.5832L58.9949 99.5832L58.9949 98.8772ZM58.3656 -0.320024L32.3299 50.8789L33.5886 51.5189L59.6242 0.320024L58.3656 -0.320024ZM58.9949 -0.70602H58.9949V0.70602H58.9949V-0.70602ZM80.5888 -0.70602H58.9949V0.70602H80.5888V-0.70602ZM81.2948 0.0310439V0H79.8828V0.0310439H81.2948ZM56.3245 51.5078L81.2236 0.33997L79.9539 -0.277882L55.0548 50.89L56.3245 51.5078ZM81.2146 98.5503L56.3155 50.8721L55.0638 51.5257L79.963 99.204L81.2146 98.5503ZM81.2627 99.0878L81.2627 99.0877L79.9149 98.6665L79.9149 98.6666L81.2627 99.0878ZM58.9949 99.5832L80.5888 99.5832L80.5888 98.1712L58.9949 98.1711L58.9949 99.5832ZM32.3396 51.5373L58.3753 99.2155L59.6146 98.5388L33.5789 50.8606L32.3396 51.5373Z" fill="#008F11" mask="url(#path-7-inside-4_112_63)"/>
                    <mask id="path-9-inside-5_112_63" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 51.1989L26.0357 0H26.0357H47.6296V0.0310469L22.7304 51.1989L47.6296 98.8771L47.6296 98.8772L26.0357 98.8772L0 51.1989Z"/>
                    </mask>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 51.1989L26.0357 0H26.0357H47.6296V0.0310469L22.7304 51.1989L47.6296 98.8771L47.6296 98.8772L26.0357 98.8772L0 51.1989Z" fill="#008F11" fill-opacity="0.71"/>
                    <path d="M26.0357 0V-0.70602H25.6026L25.4064 -0.320024L26.0357 0ZM0 51.1989L-0.629324 50.8789L-0.798025 51.2106L-0.619651 51.5373L0 51.1989ZM47.6296 0H48.3356V-0.70602H47.6296V0ZM47.6296 0.0310469L48.2644 0.339973L48.3356 0.193709V0.0310469H47.6296ZM22.7304 51.1989L22.0956 50.89L21.9398 51.2101L22.1046 51.5257L22.7304 51.1989ZM47.6296 98.8771L48.3035 99.0877L48.3905 98.8091L48.2554 98.5503L47.6296 98.8771ZM47.6296 98.8772L47.6296 99.5832L48.1486 99.5832L48.3034 99.0878L47.6296 98.8772ZM26.0357 98.8772L25.416 99.2155L25.6168 99.5832L26.0357 99.5832L26.0357 98.8772ZM25.4064 -0.320024L-0.629324 50.8789L0.629324 51.5189L26.665 0.320024L25.4064 -0.320024ZM26.0357 -0.70602H26.0357V0.70602H26.0357V-0.70602ZM47.6296 -0.70602H26.0357V0.70602H47.6296V-0.70602ZM48.3356 0.0310469V0H46.9235V0.0310469H48.3356ZM23.3652 51.5078L48.2644 0.339973L46.9947 -0.277879L22.0956 50.89L23.3652 51.5078ZM48.2554 98.5503L23.3562 50.8721L22.1046 51.5257L47.0038 99.204L48.2554 98.5503ZM48.3034 99.0878L48.3035 99.0877L46.9557 98.6666L46.9557 98.6666L48.3034 99.0878ZM26.0357 99.5832L47.6296 99.5832L47.6296 98.1712L26.0357 98.1711L26.0357 99.5832ZM-0.619651 51.5373L25.416 99.2155L26.6553 98.5388L0.619651 50.8606L-0.619651 51.5373Z" fill="#008F11" mask="url(#path-9-inside-5_112_63)"/>
                    </g>
                    <foreignObject width="100%" height="100%">
                        <p className='h-[10vh] text-[4vh] text-green-500 font-researcher grid place-items-center'>Enter</p>
                    </foreignObject>
                </svg>

                </Link>
            </div>

        </div>
    )
}