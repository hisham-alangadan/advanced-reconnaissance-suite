import rect33 from '../../public/Rectangle 33.svg'

export default function Options({ text, length = 1  }:{text: String, length?: number}) {
    if(length == 1)
        return (
            <svg viewBox="0 0 629 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88.5854 2V101H2V46.4502L39.4904 2H88.5854ZM92.5854 101V2H627V101H92.5854Z" fill="#29B83A" stroke="#008F11" strokeWidth="4"/>
                <foreignObject width="100%" height="100%">
                    <div className="font-researcher ml-[5vw] h-full flex items-center justify-around text-center text-[2em]">
                        {text}
                    </div>
                </foreignObject>
            </svg>
        ) 
    else if(length == 2) 
        return (
            <svg viewBox="0 0 457 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88.5854 2V101H2V46.4502L39.4904 2H88.5854ZM92.5854 101V2H454.5V101H92.5854Z" fill="#29B83A" stroke="#008F11" stroke-width="4"/>
                <foreignObject width="100%" height="100%">
                    <div className="font-researcher ml-[5vw] pt-[2.5vh] text-[2em] text-center">
                        {text}
                    </div>
                </foreignObject>
            </svg>
    )
}