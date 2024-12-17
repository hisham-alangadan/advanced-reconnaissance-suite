import styles from './styles/Home_main.module.css'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="home-main h-[130vh] w-[100vw] bg-background1 border border-background1 flex flex-row"> {/*for some reason, without the border, a margin-top comes for reasons i cannot comprehend*/}

            {/* The ars text and the rotating thingy with a magnifying glass */}
            <div className="ars-text-and-search h-[80vh] w-[40%] relative">
                <div className="text-white text-[5vw] lg:text-[4vw] m-[1vw] lg:ml-[3vw] font-researcher [mask-image: url(mask.svg)]">
                    Advanced <br /> Recoinnassaince <br /> Suite
                </div>
                <div className="animated-circle-thingy absolute bottom-0 left-20">
                    <div className="h-44 w-44 bg-green-500/20 rounded-full relaative">
                        <div className="absolute bg-transparent w-full h-full rounded-full outline-green-600/80 outline-2 outline-dashed outline-offset-4"></div>
                        <div className="absolute top-[-10px] left-[-10px] box-content bg-transparent w-full h-full rounded-full border-[10px] border-l-transparent border-r-transparent border-b-transparent border-green-900/50 animate-[spin_13s_linear_infinite]"></div>

                        <div className="absolute top-[-10px] left-[-10px] box-content bg-transparent w-full h-full rounded-full border-[10px] border-l-transparent border-r-transparent border-b-transparent border-green-900 animate-[spin_20s_ease-in-out_infinite]"></div>

                        <div className="bg-transparent w-[90%] h-[90%] absolute top-[5%] left-[5%] border-2 border-l-transparent border-r-transparent border-b-transparent rounded-full animate-[spin_23s_linear_reverse_infinite]">
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
                <div className="relative ml-[10vw] mt-[5vh] h-[75vh] ">
                    <svg className='w-[100%]' width="390" height="109" viewBox="0 0 390 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1" clip-path="url(#clip0_49_8)">
                        <g id="Union">
                        <mask id="path-1-inside-1_49_8" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M181.749 0L211.185 48.9691L155.269 49.2334L155.352 49.0785H56.5194V49.0786L56.5193 49.0785H56.5139V49.0685L43.8212 25.3855L56.5139 0.0109334V1.59604e-05L181.749 0Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M181.749 0L211.185 48.9691L155.269 49.2334L155.352 49.0785H56.5194V49.0786L56.5193 49.0785H56.5139V49.0685L43.8212 25.3855L56.5139 0.0109334V1.59604e-05L181.749 0Z" fill="#060040"/>
                        <path d="M211.185 48.9691L211.195 51.0872L214.919 51.0695L213.001 47.8779L211.185 48.9691ZM181.749 0L183.564 -1.09123L182.947 -2.11806L181.749 -2.11806L181.749 0ZM155.269 49.2334L153.403 48.2302L151.715 51.3683L155.279 51.3515L155.269 49.2334ZM155.352 49.0785L157.217 50.0818L158.896 46.9605H155.352V49.0785ZM56.5194 49.0785V46.9605H54.4013V49.0785H56.5194ZM56.5194 49.0786L54.657 50.0874L58.6374 49.0786H56.5194ZM56.5193 49.0785L58.3817 48.0697L57.7809 46.9605H56.5193V49.0785ZM56.5139 49.0785H54.3959V51.1966H56.5139V49.0785ZM56.5139 49.0685H58.632V48.5367L58.3808 48.0679L56.5139 49.0685ZM43.8212 25.3855L41.9269 24.4379L41.4361 25.4191L41.9543 26.386L43.8212 25.3855ZM56.5139 0.0109334L58.4082 0.958486L58.632 0.511133V0.0109334H56.5139ZM56.5139 1.59604e-05L56.5139 -2.11804L54.3959 -2.11804V1.59604e-05H56.5139ZM213.001 47.8779L183.564 -1.09123L179.933 1.09123L209.37 50.0603L213.001 47.8779ZM155.279 51.3515L211.195 51.0872L211.175 46.8511L155.259 47.1154L155.279 51.3515ZM153.486 48.0752L153.403 48.2302L157.134 50.2367L157.217 50.0818L153.486 48.0752ZM155.352 46.9605H56.5194V51.1966H155.352V46.9605ZM58.6374 49.0786V49.0785H54.4013V49.0786H58.6374ZM54.6569 50.0873L54.657 50.0874L58.3818 48.0698L58.3817 48.0697L54.6569 50.0873ZM56.5193 46.9605H56.5139V51.1966H56.5193V46.9605ZM58.632 49.0785V49.0685H54.3959V49.0785H58.632ZM41.9543 26.386L54.6471 50.069L58.3808 48.0679L45.688 24.3849L41.9543 26.386ZM54.6196 -0.93662L41.9269 24.4379L45.7155 26.333L58.4082 0.958486L54.6196 -0.93662ZM58.632 0.0109334V1.59604e-05H54.3959V0.0109334H58.632ZM56.5139 2.11808L181.749 2.11806L181.749 -2.11806L56.5139 -2.11804L56.5139 2.11808Z" fill="#008F11" mask="url(#path-1-inside-1_49_8)"/>
                        </g>
                        <g id="Subtract">
                        <mask id="path-3-inside-2_49_8" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.3595 25.413L41.2825 0H41.2825H52.0008V0.0154906L39.6419 25.413L52.0008 49.0785L41.2825 49.0785L28.3595 25.413Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.3595 25.413L41.2825 0H41.2825H52.0008V0.0154906L39.6419 25.413L52.0008 49.0785L41.2825 49.0785L28.3595 25.413Z" fill="#008F11" fillOpacity="0.9"/>
                        <path d="M41.2825 0V-0.70602H40.8495L40.6532 -0.320023L41.2825 0ZM28.3595 25.413L27.7302 25.093L27.5615 25.4248L27.7398 25.7514L28.3595 25.413ZM52.0008 0H52.7068V-0.70602H52.0008V0ZM52.0008 0.0154906L52.6356 0.324417L52.7068 0.178153V0.0154906H52.0008ZM39.6419 25.413L39.0071 25.1041L38.8513 25.4243L39.0161 25.7399L39.6419 25.413ZM52.0008 49.0785L52.0008 49.7845L53.166 49.7845L52.6266 48.7517L52.0008 49.0785ZM41.2825 49.0785L40.6629 49.4169L40.8636 49.7845L41.2825 49.7845L41.2825 49.0785ZM40.6532 -0.320023L27.7302 25.093L28.9888 25.7331L41.9118 0.320023L40.6532 -0.320023ZM41.2825 -0.70602H41.2825V0.70602H41.2825V-0.70602ZM52.0008 -0.70602H41.2825V0.70602H52.0008V-0.70602ZM52.7068 0.0154906V0H51.2948V0.0154906H52.7068ZM40.2768 25.722L52.6356 0.324417L51.366 -0.293436L39.0071 25.1041L40.2768 25.722ZM52.6266 48.7517L40.2677 25.0862L39.0161 25.7399L51.375 49.4053L52.6266 48.7517ZM41.2825 49.7845L52.0008 49.7845L52.0008 48.3725L41.2825 48.3725L41.2825 49.7845ZM27.7398 25.7514L40.6629 49.4169L41.9022 48.7401L28.9791 25.0747L27.7398 25.7514Z" fill="#008F11" mask="url(#path-3-inside-2_49_8)"/>
                        </g>
                        <g id="Subtract_2">
                        <mask id="path-5-inside-3_49_8" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 25.413L26.923 0H26.923H37.6413V0.0154906L25.2824 25.413L37.6413 49.0785L26.923 49.0785L14 25.413Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 25.413L26.923 0H26.923H37.6413V0.0154906L25.2824 25.413L37.6413 49.0785L26.923 49.0785L14 25.413Z" fill="#008F11" fillOpacity="0.7"/>
                        <path d="M26.923 0V-0.70602H26.49L26.2937 -0.320023L26.923 0ZM14 25.413L13.3707 25.093L13.202 25.4248L13.3803 25.7514L14 25.413ZM37.6413 0H38.3473V-0.70602H37.6413V0ZM37.6413 0.0154906L38.2761 0.324417L38.3473 0.178153V0.0154906H37.6413ZM25.2824 25.413L24.6476 25.1041L24.4918 25.4243L24.6566 25.7399L25.2824 25.413ZM37.6413 49.0785L37.6413 49.7845L38.8065 49.7845L38.2671 48.7517L37.6413 49.0785ZM26.923 49.0785L26.3034 49.4169L26.5041 49.7845L26.923 49.7845L26.923 49.0785ZM26.2937 -0.320023L13.3707 25.093L14.6293 25.7331L27.5523 0.320023L26.2937 -0.320023ZM26.923 -0.70602H26.923V0.70602H26.923V-0.70602ZM37.6413 -0.70602H26.923V0.70602H37.6413V-0.70602ZM38.3473 0.0154906V0H36.9353V0.0154906H38.3473ZM25.9173 25.722L38.2761 0.324417L37.0065 -0.293436L24.6476 25.1041L25.9173 25.722ZM38.2671 48.7517L25.9082 25.0862L24.6566 25.7399L37.0155 49.4053L38.2671 48.7517ZM26.923 49.7845L37.6413 49.7845L37.6413 48.3725L26.923 48.3725L26.923 49.7845ZM13.3803 25.7514L26.3034 49.4169L27.5427 48.7401L14.6197 25.0747L13.3803 25.7514Z" fill="#008F11" mask="url(#path-5-inside-3_49_8)"/>
                        </g>
                        <g id="Subtract_3">
                        <mask id="path-7-inside-4_49_8" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 25.413L12.923 0H12.923H23.6413V0.0154906L11.2824 25.413L23.6413 49.0785L12.923 49.0785L0 25.413Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 25.413L12.923 0H12.923H23.6413V0.0154906L11.2824 25.413L23.6413 49.0785L12.923 49.0785L0 25.413Z" fill="#008F11" fillOpacity="0.52"/>
                        <path d="M12.923 0V-0.70602H12.49L12.2937 -0.320023L12.923 0ZM0 25.413L-0.629324 25.093L-0.798024 25.4248L-0.619651 25.7514L0 25.413ZM23.6413 0H24.3473V-0.70602H23.6413V0ZM23.6413 0.0154906L24.2761 0.324417L24.3473 0.178153V0.0154906H23.6413ZM11.2824 25.413L10.6476 25.1041L10.4918 25.4243L10.6566 25.7399L11.2824 25.413ZM23.6413 49.0785L23.6413 49.7845L24.8065 49.7845L24.2671 48.7517L23.6413 49.0785ZM12.923 49.0785L12.3034 49.4169L12.5041 49.7845L12.923 49.7845L12.923 49.0785ZM12.2937 -0.320023L-0.629324 25.093L0.629324 25.7331L13.5523 0.320023L12.2937 -0.320023ZM12.923 -0.70602H12.923V0.70602H12.923V-0.70602ZM23.6413 -0.70602H12.923V0.70602H23.6413V-0.70602ZM24.3473 0.0154906V0H22.9353V0.0154906H24.3473ZM11.9173 25.722L24.2761 0.324417L23.0065 -0.293436L10.6476 25.1041L11.9173 25.722ZM24.2671 48.7517L11.9082 25.0862L10.6566 25.7399L23.0155 49.4053L24.2671 48.7517ZM12.923 49.7845L23.6413 49.7845L23.6413 48.3725L12.923 48.3725L12.923 49.7845ZM-0.619651 25.7514L12.3034 49.4169L13.5427 48.7401L0.619651 25.0747L-0.619651 25.7514Z" fill="#008F11" fillOpacity="0.32" mask="url(#path-7-inside-4_49_8)"/>
                        </g>
                        <line id="Line 1" x1="194" y1="22.294" x2="326" y2="22.294" stroke="#008F11" strokeWidth="1.41204"/>
                        <path id="Line 2" d="M325.599 22.0093L382.111 100.919" stroke="#008F11" strokeWidth="1.41204"/>
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
                <div className="cmatrix relative ml-[-2vw] mt-[15vh] h-[65vh]">
                    {/* <svg width="401" height="601" viewBox="0 0 401 601" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                        <mask id='svg-mask'>
                        <path d="M368 169.5V170.536L368.732 171.268L398.5 201.036V398.976L368.718 429.247L368 429.976V431V568.977L339.452 598H61.5355L32.5 568.964V430.5V429.488L31.7965 428.761L2.5 398.488V201.523L31.7823 171.753L32.5 171.023V170V31.5235L61.0477 2.5H339.464L368 31.0355V169.5Z" stroke="#00FF1E" strokeWidth="5"/>   
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
                        
                        <path d="M368 169.5V170.536L368.732 171.268L398.5 201.036V398.976L368.718 429.247L368 429.976V431V568.977L339.452 598H61.5355L32.5 568.964V430.5V429.488L31.7965 428.761L2.5 398.488V201.523L31.7823 171.753L32.5 171.023V170V31.5235L61.0477 2.5H339.464L368 31.0355V169.5Z" fill="none" stroke="#00FF1E" strokeWidth="5" />
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

            {/* Start Button */}
            <div className="start w-[16vw] absolute bottom-[5vh] left-[42vw]">
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
                        <p className='h-[10vh] text-[4vh] text-green-500 font-researcher grid place-items-center'>Start</p>
                    </foreignObject>
                </svg>

                </Link>
            </div>



        </div>
    )
}