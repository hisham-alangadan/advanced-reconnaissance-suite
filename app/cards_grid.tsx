// import bg_img from './styles/bg_cards_grid.jpg'
import bg_img from './styles/hexdump_scrnshot.png'
import globe from './styles/Globe.svg'

export default function Cards_grid() {

    const data = [
        [globe, 'Port Scanning', 'Scan ports by saying stuff that makes furnitures float.'],
        [globe, 'Server is Safe', 'Scans can find vulnerabilities fast. Trust me bro.'],
        [globe, 'Port Scanning', 'Scan ports by saying stuff that makes furnitures float.'],
        [globe, 'Port Scanning', 'Scan ports by saying stuff that makes furnitures float.'],
        [globe, 'Port Scanning', 'Scan ports by saying stuff that makes furnitures float.'],
        [globe, 'Port Scanning', 'Scan ports by saying stuff that makes furnitures float.']
    ]

    return (
        <div className="relative `bg-[#0d2042] pt-[10vh]">
            <img className='absolute top-0 left-0 w-[100%] -z-10 opacity-5' src={bg_img.src} alt="." />

            <div className="mt-[30vh] font-researcher text-center text-7xl">
                Advanced Features
            </div>

            <div className="grid grid-cols-3 gap-x-52 gap-y-10 mx-[5vw] mt-[5vh]">

                {data.map(([svg, title, description]) => (
                    <div className="flex flex-col items-center m-8 p-8 bg-green-600 rounded-2xl border-8 border-green-800">
                        <img className='h-[10vh] w-[10vh] my-8 rounded-full bg-green-400' src={svg.src} alt="." />
                        <div className='text-6xl text-center mb-8'>{title}</div>
                        <div className='text-xl text-center mb-8'>{description}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}