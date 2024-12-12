import styles from './styles/Home_main.module.css'

export default function Home_main() {
    return (
        <div className="home-main h-[90vh] w-[100vw] bg-background1 border border-background1 flex flex-row"> {/*for some reason, without the border, a margin-top comes for reasons i cannot comprehend*/}

            {/* The ars text and the rotating thingy with a magnifying glass */}
            <div className="ars-text-and-search h-[80%] w-[40%] relative">
                <div className="text-white text-[5vw] lg:text-[4vw] m-[1vw] lg:ml-[3vw] font-researcher [mask-image: url(mask.svg)]">
                    Advanced <br /> Recoinnassaince <br /> Suite
                </div>
                <div className="animated-circle-thingy absolute bottom-0 left-20">
                    <div className="h-44 w-44 bg-green-500/20 rounded-full relaative">
                        <div className="absolute bg-transparent w-full h-full rounded-full outline-green-600/80 outline-2 outline-dashed outline-offset-4"></div>
                        <div className="absolute top-[-10px] left-[-10px] box-content bg-transparent w-full h-full rounded-full border-[10px] border-l-transparent border-r-transparent border-b-transparent border-green-900/50 animate-[spin_13s_linear_infinite]"></div>

                        <div className="absolute top-[-10px] left-[-10px] box-content bg-transparent w-full h-full rounded-full border-[10px] border-l-transparent border-r-transparent border-b-transparent border-green-900 animate-[spin_20s_ease-in-out_infinite]"></div>

                        <div className="bg-transparent w-[90%] h-[90%] absolute top-[5%] left-[5%] border-2 border-l-transparent border-r-transparent border-b-transparent rounded-full animate-[spin_13s_linear_infinite]">
                            <div className="absolute w-1.5 h-1.5 rounded-full bg-white mt-[12%] ml-[12%]"></div>
                            <div className="absolute w-1.5 h-1.5 rounded-full bg-white mt-[12%] ml-[83%]"></div>
                        </div>
                        <div className="bg-transparent w-[80%] h-[80%] absolute top-[10%] left-[10%] border-2 border-l-transparent border-r-transparent border-b-transparent rounded-full animate-[spin_10s_linear_infinite]">
                            <div className="absolute w-1.5 h-1.5 rounded-full bg-white mt-[12%] ml-[12%]"></div>
                            <div className="absolute w-1.5 h-1.5 rounded-full bg-white mt-[12%] ml-[83%]"></div>
                        </div>

                        <svg className='absolute top-[23%] left-[25%] w-[50%] h-[50%]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64" fill='green'>
                            <path d="M 24 2.8886719 C 12.365714 2.8886719 2.8886719 12.365723 2.8886719 24 C 2.8886719 35.634277 12.365714 45.111328 24 45.111328 C 29.036552 45.111328 33.664698 43.331333 37.298828 40.373047 L 52.130859 58.953125 C 52.130859 58.953125 55.379484 59.435984 57.396484 57.333984 C 59.427484 55.215984 58.951172 52.134766 58.951172 52.134766 L 40.373047 37.298828 C 43.331332 33.664697 45.111328 29.036548 45.111328 24 C 45.111328 12.365723 35.634286 2.8886719 24 2.8886719 z M 24 7.1113281 C 33.352549 7.1113281 40.888672 14.647457 40.888672 24 C 40.888672 33.352543 33.352549 40.888672 24 40.888672 C 14.647451 40.888672 7.1113281 33.352543 7.1113281 24 C 7.1113281 14.647457 14.647451 7.1113281 24 7.1113281 z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* The whole cmatrix contraption */}
            {/* <div> */}
                {/* The tooltip for the cmatrix type thingy */} 
                <div className="relative ml-[10vw] mt-[5vh]">
                    <svg className='w-[100%]' width="390" height="109" viewBox="0 0 390 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1" clip-path="url(#clip0_49_8)">
                        <g id="Union">
                        <mask id="path-1-inside-1_49_8" fill="white">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M181.749 0L211.185 48.9691L155.269 49.2334L155.352 49.0785H56.5194V49.0786L56.5193 49.0785H56.5139V49.0685L43.8212 25.3855L56.5139 0.0109334V1.59604e-05L181.749 0Z"/>
                        </mask>
                        <path fillRule="evenodd" clip-rule="evenodd" d="M181.749 0L211.185 48.9691L155.269 49.2334L155.352 49.0785H56.5194V49.0786L56.5193 49.0785H56.5139V49.0685L43.8212 25.3855L56.5139 0.0109334V1.59604e-05L181.749 0Z" fill="#060040"/>
                        <path d="M211.185 48.9691L211.195 51.0872L214.919 51.0695L213.001 47.8779L211.185 48.9691ZM181.749 0L183.564 -1.09123L182.947 -2.11806L181.749 -2.11806L181.749 0ZM155.269 49.2334L153.403 48.2302L151.715 51.3683L155.279 51.3515L155.269 49.2334ZM155.352 49.0785L157.217 50.0818L158.896 46.9605H155.352V49.0785ZM56.5194 49.0785V46.9605H54.4013V49.0785H56.5194ZM56.5194 49.0786L54.657 50.0874L58.6374 49.0786H56.5194ZM56.5193 49.0785L58.3817 48.0697L57.7809 46.9605H56.5193V49.0785ZM56.5139 49.0785H54.3959V51.1966H56.5139V49.0785ZM56.5139 49.0685H58.632V48.5367L58.3808 48.0679L56.5139 49.0685ZM43.8212 25.3855L41.9269 24.4379L41.4361 25.4191L41.9543 26.386L43.8212 25.3855ZM56.5139 0.0109334L58.4082 0.958486L58.632 0.511133V0.0109334H56.5139ZM56.5139 1.59604e-05L56.5139 -2.11804L54.3959 -2.11804V1.59604e-05H56.5139ZM213.001 47.8779L183.564 -1.09123L179.933 1.09123L209.37 50.0603L213.001 47.8779ZM155.279 51.3515L211.195 51.0872L211.175 46.8511L155.259 47.1154L155.279 51.3515ZM153.486 48.0752L153.403 48.2302L157.134 50.2367L157.217 50.0818L153.486 48.0752ZM155.352 46.9605H56.5194V51.1966H155.352V46.9605ZM58.6374 49.0786V49.0785H54.4013V49.0786H58.6374ZM54.6569 50.0873L54.657 50.0874L58.3818 48.0698L58.3817 48.0697L54.6569 50.0873ZM56.5193 46.9605H56.5139V51.1966H56.5193V46.9605ZM58.632 49.0785V49.0685H54.3959V49.0785H58.632ZM41.9543 26.386L54.6471 50.069L58.3808 48.0679L45.688 24.3849L41.9543 26.386ZM54.6196 -0.93662L41.9269 24.4379L45.7155 26.333L58.4082 0.958486L54.6196 -0.93662ZM58.632 0.0109334V1.59604e-05H54.3959V0.0109334H58.632ZM56.5139 2.11808L181.749 2.11806L181.749 -2.11806L56.5139 -2.11804L56.5139 2.11808Z" fill="#008F11" mask="url(#path-1-inside-1_49_8)"/>
                        </g>
                        <g id="Subtract">
                        <mask id="path-3-inside-2_49_8" fill="white">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M28.3595 25.413L41.2825 0H41.2825H52.0008V0.0154906L39.6419 25.413L52.0008 49.0785L41.2825 49.0785L28.3595 25.413Z"/>
                        </mask>
                        <path fillRule="evenodd" clip-rule="evenodd" d="M28.3595 25.413L41.2825 0H41.2825H52.0008V0.0154906L39.6419 25.413L52.0008 49.0785L41.2825 49.0785L28.3595 25.413Z" fill="#008F11" fill-opacity="0.9"/>
                        <path d="M41.2825 0V-0.70602H40.8495L40.6532 -0.320023L41.2825 0ZM28.3595 25.413L27.7302 25.093L27.5615 25.4248L27.7398 25.7514L28.3595 25.413ZM52.0008 0H52.7068V-0.70602H52.0008V0ZM52.0008 0.0154906L52.6356 0.324417L52.7068 0.178153V0.0154906H52.0008ZM39.6419 25.413L39.0071 25.1041L38.8513 25.4243L39.0161 25.7399L39.6419 25.413ZM52.0008 49.0785L52.0008 49.7845L53.166 49.7845L52.6266 48.7517L52.0008 49.0785ZM41.2825 49.0785L40.6629 49.4169L40.8636 49.7845L41.2825 49.7845L41.2825 49.0785ZM40.6532 -0.320023L27.7302 25.093L28.9888 25.7331L41.9118 0.320023L40.6532 -0.320023ZM41.2825 -0.70602H41.2825V0.70602H41.2825V-0.70602ZM52.0008 -0.70602H41.2825V0.70602H52.0008V-0.70602ZM52.7068 0.0154906V0H51.2948V0.0154906H52.7068ZM40.2768 25.722L52.6356 0.324417L51.366 -0.293436L39.0071 25.1041L40.2768 25.722ZM52.6266 48.7517L40.2677 25.0862L39.0161 25.7399L51.375 49.4053L52.6266 48.7517ZM41.2825 49.7845L52.0008 49.7845L52.0008 48.3725L41.2825 48.3725L41.2825 49.7845ZM27.7398 25.7514L40.6629 49.4169L41.9022 48.7401L28.9791 25.0747L27.7398 25.7514Z" fill="#008F11" mask="url(#path-3-inside-2_49_8)"/>
                        </g>
                        <g id="Subtract_2">
                        <mask id="path-5-inside-3_49_8" fill="white">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M14 25.413L26.923 0H26.923H37.6413V0.0154906L25.2824 25.413L37.6413 49.0785L26.923 49.0785L14 25.413Z"/>
                        </mask>
                        <path fillRule="evenodd" clip-rule="evenodd" d="M14 25.413L26.923 0H26.923H37.6413V0.0154906L25.2824 25.413L37.6413 49.0785L26.923 49.0785L14 25.413Z" fill="#008F11" fill-opacity="0.7"/>
                        <path d="M26.923 0V-0.70602H26.49L26.2937 -0.320023L26.923 0ZM14 25.413L13.3707 25.093L13.202 25.4248L13.3803 25.7514L14 25.413ZM37.6413 0H38.3473V-0.70602H37.6413V0ZM37.6413 0.0154906L38.2761 0.324417L38.3473 0.178153V0.0154906H37.6413ZM25.2824 25.413L24.6476 25.1041L24.4918 25.4243L24.6566 25.7399L25.2824 25.413ZM37.6413 49.0785L37.6413 49.7845L38.8065 49.7845L38.2671 48.7517L37.6413 49.0785ZM26.923 49.0785L26.3034 49.4169L26.5041 49.7845L26.923 49.7845L26.923 49.0785ZM26.2937 -0.320023L13.3707 25.093L14.6293 25.7331L27.5523 0.320023L26.2937 -0.320023ZM26.923 -0.70602H26.923V0.70602H26.923V-0.70602ZM37.6413 -0.70602H26.923V0.70602H37.6413V-0.70602ZM38.3473 0.0154906V0H36.9353V0.0154906H38.3473ZM25.9173 25.722L38.2761 0.324417L37.0065 -0.293436L24.6476 25.1041L25.9173 25.722ZM38.2671 48.7517L25.9082 25.0862L24.6566 25.7399L37.0155 49.4053L38.2671 48.7517ZM26.923 49.7845L37.6413 49.7845L37.6413 48.3725L26.923 48.3725L26.923 49.7845ZM13.3803 25.7514L26.3034 49.4169L27.5427 48.7401L14.6197 25.0747L13.3803 25.7514Z" fill="#008F11" mask="url(#path-5-inside-3_49_8)"/>
                        </g>
                        <g id="Subtract_3">
                        <mask id="path-7-inside-4_49_8" fill="white">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M0 25.413L12.923 0H12.923H23.6413V0.0154906L11.2824 25.413L23.6413 49.0785L12.923 49.0785L0 25.413Z"/>
                        </mask>
                        <path fillRule="evenodd" clip-rule="evenodd" d="M0 25.413L12.923 0H12.923H23.6413V0.0154906L11.2824 25.413L23.6413 49.0785L12.923 49.0785L0 25.413Z" fill="#008F11" fill-opacity="0.52"/>
                        <path d="M12.923 0V-0.70602H12.49L12.2937 -0.320023L12.923 0ZM0 25.413L-0.629324 25.093L-0.798024 25.4248L-0.619651 25.7514L0 25.413ZM23.6413 0H24.3473V-0.70602H23.6413V0ZM23.6413 0.0154906L24.2761 0.324417L24.3473 0.178153V0.0154906H23.6413ZM11.2824 25.413L10.6476 25.1041L10.4918 25.4243L10.6566 25.7399L11.2824 25.413ZM23.6413 49.0785L23.6413 49.7845L24.8065 49.7845L24.2671 48.7517L23.6413 49.0785ZM12.923 49.0785L12.3034 49.4169L12.5041 49.7845L12.923 49.7845L12.923 49.0785ZM12.2937 -0.320023L-0.629324 25.093L0.629324 25.7331L13.5523 0.320023L12.2937 -0.320023ZM12.923 -0.70602H12.923V0.70602H12.923V-0.70602ZM23.6413 -0.70602H12.923V0.70602H23.6413V-0.70602ZM24.3473 0.0154906V0H22.9353V0.0154906H24.3473ZM11.9173 25.722L24.2761 0.324417L23.0065 -0.293436L10.6476 25.1041L11.9173 25.722ZM24.2671 48.7517L11.9082 25.0862L10.6566 25.7399L23.0155 49.4053L24.2671 48.7517ZM12.923 49.7845L23.6413 49.7845L23.6413 48.3725L12.923 48.3725L12.923 49.7845ZM-0.619651 25.7514L12.3034 49.4169L13.5427 48.7401L0.619651 25.0747L-0.619651 25.7514Z" fill="#008F11" fill-opacity="0.32" mask="url(#path-7-inside-4_49_8)"/>
                        </g>
                        <line id="Line 1" x1="194" y1="22.294" x2="326" y2="22.294" stroke="#008F11" stroke-width="1.41204"/>
                        <path id="Line 2" d="M325.599 22.0093L382.111 100.919" stroke="#008F11" stroke-width="1.41204"/>
                        <ellipse id="Ellipse 1" cx="384.5" cy="104" rx="5.5" ry="5" fill="#008F11"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_49_8">
                        <rect width="390" height="109" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <div className="scanning-text absolute font-researcher">Scanning...</div>
                </div>

                {/* The cmatrix type thingy */}
                <div className="cmatrix relative ml-[-2vw] mt-[15vh]">
                    {/* <svg width="401" height="601" viewBox="0 0 401 601" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                        <mask id='svg-mask'>
                        <path d="M368 169.5V170.536L368.732 171.268L398.5 201.036V398.976L368.718 429.247L368 429.976V431V568.977L339.452 598H61.5355L32.5 568.964V430.5V429.488L31.7965 428.761L2.5 398.488V201.523L31.7823 171.753L32.5 171.023V170V31.5235L61.0477 2.5H339.464L368 31.0355V169.5Z" stroke="#00FF1E" stroke-width="5"/>   
                        </mask>
                        </defs>
                        <image href='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' mask='url(#svg-mask)'></image>
                    </svg> */}

                    <svg width="401" height="601" viewBox="0 0 401 601" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <mask id="svg-mask">
                            <path d="M368 169.5V170.536L368.732 171.268L398.5 201.036V398.976L368.718 429.247L368 429.976V431V568.977L339.452 598H61.5355L32.5 568.964V430.5V429.488L31.7965 428.761L2.5 398.488V201.523L31.7823 171.753L32.5 171.023V170V31.5235L61.0477 2.5H339.464L368 31.0355V169.5Z" fill="white" />
                            </mask>
                        </defs>

                        <rect x="0" y="0" width="401" height="601" fill="#000" mask="url(#svg-mask)" />
                        
                        <path d="M368 169.5V170.536L368.732 171.268L398.5 201.036V398.976L368.718 429.247L368 429.976V431V568.977L339.452 598H61.5355L32.5 568.964V430.5V429.488L31.7965 428.761L2.5 398.488V201.523L31.7823 171.753L32.5 171.023V170V31.5235L61.0477 2.5H339.464L368 31.0355V169.5Z" fill="none" stroke="#00FF1E" stroke-width="5" />
                    </svg>

                    <div className="absolute top-0 pl-10 font-anonymus text-green-700" style={{maskImage: 'url(#svg-mask)', maskSize: 'cover'}}>
                        IP: 10.23.54.89<br />
                        Subnet Mask: 255.255.255.128<br />
                        Gateway: 10.23.54.1<br />
                        DNS Server: 8.8.8.8<br />
                        Secondary DNS: 8.8.4.4<br />
                        MAC Address: 00:1D:A7:8B:C9:34<br />
                        Host Name: server-42a1<br />
                        Connection Speed: 1 Gbps<br />
                        Ping: 12 ms<br />
                        TCP Port: 443<br />
                        UDP Port: 53<br />
                        Network Interface: eth0<br />
                        Router IP: 10.23.54.254<br />
                        DHCP Enabled: Yes<br />
                        Wi-Fi SSID: HomeNetwork_24GHz<br />
                        Wi-Fi Signal Strength: -67 dBm<br />
                        Wi-Fi Channel: 6<br />
                        MTU: 1500<br />
                        Jitter: 5 ms<br />
                        Packet Loss: 0.1%<br />
                        Local IP: 192.168.1.56<br />
                        External IP: 34.204.12.123<br />
                        IPv6 Address: 2001:0db8:85a3:0000:0000:8a2e:0370:7334<br />
                        IP Lease Time: 86400 seconds<br />
                        DHCP Server: 10.23.54.10<br />
                        SSL Certificate Expiry: 2025-06-12<br />
                        System Uptime: 12 days, 8 hours, 24 minutes<br />
                        Last Reboot: 2024-12-05 14:23:57<br />
                        Firewall Status: Active<br />
                        Antivirus: Norton Security 2024<br />
                    </div>

                </div>
            {/* </div> */}


            
        </div>
    )
}