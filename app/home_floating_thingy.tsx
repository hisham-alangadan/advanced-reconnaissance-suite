import lockimg from './styles/image 2.png'

export default function Home_floating_thingy() {
    return (
        // <div className="absolute top-[85vh] ml-[10vw] w-[100%] h-[100%] border">
        <div className="absolute left-[10vw] top-[85vh] w-[80vw] h-[100%] z-20">
            <svg className="w-[80vw] absolute" width="1750" height="589" viewBox="0 0 1750 589" fill="#0D2042" xmlns="http://www.w3.org/2000/svg">
                <path d="M160.01 54.5H1695.5V459V460.851L1696.8 462.166L1745.5 511.351V584.5H1042.85L993.666 535.802L992.351 534.5H990.5H700.5H698.636L697.318 535.818L648.636 584.5H4.5V4.5H107.649L156.845 53.1981L158.16 54.5H160.01Z" stroke="#008F11" stroke-width="9"/>
            </svg>
            
            <svg className="absolute mt-[15vh] ml-[5vh]" width="553" height="348" viewBox="0 0 553 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <mask id="multicircular-mask">
                        <path d="M465.054 154.24C465.054 239.425 390.059 308.48 297.547 308.48C205.035 308.48 130.039 239.425 130.039 154.24C130.039 69.0557 205.035 0 297.547 0C390.059 0 465.054 69.0557 465.054 154.24Z" fill="#D9D9D9"/>
                        <path d="M243.18 117.371C243.18 179.205 188.742 229.331 121.59 229.331C54.4377 229.331 0 179.205 0 117.371C0 55.5379 54.4377 5.41193 121.59 5.41193C188.742 5.41193 243.18 55.5379 243.18 117.371Z" fill="#D9D9D9"/>
                        <path d="M552.482 248.611C552.482 302.972 501.333 347.04 438.238 347.04C375.144 347.04 323.995 302.972 323.995 248.611C323.995 194.25 375.144 150.181 438.238 150.181C501.333 150.181 552.482 194.25 552.482 248.611Z" fill="#D9D9D9"/>
                    </mask>
                </defs>
                <image href={lockimg.src} mask='url(#multicircular-mask)' />
            </svg>

            <div className='absolute top-[10vh] right-[5vw] h-[40vh] w-[40vw]'>
                <div className="font-researcher text-center text-5xl">
                    Be secure
                </div>
                <div className="flex flex-col justify-evenly h-[100%]">
                    <div className="h-[30%] bg-gray-600">
                        <div className="flex flex-row h-[100%] items-center justify-center">
                            <svg className="h-[5vh] basis-[10%]" fill="#FFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 45.402 45.402">
                                <g>
                                    <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                                        c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                                        c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                                        c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                                </g>
                            </svg>
                            <div className='basis-[90%]'>Very good things</div>
                        </div>
                    </div>
                    <div className="h-[30%] bg-gray-600">
                    <div className="flex flex-row h-[100%] items-center justify-center">
                            <svg className="h-[5vh] basis-[10%]" fill="#FFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 45.402 45.402">
                                <g>
                                    <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
                                        c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
                                        c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
                                        c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                                </g>
                            </svg>
                            <div className='basis-[90%]'>More good things</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}