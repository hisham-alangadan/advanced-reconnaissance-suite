'use client'

import { Navbar, Options } from "@/components";
import svg_selected from "../../public/Selected.svg"
import SelectedsvgVariableViewBox from "../../components/selected_svg_variable_viewBox";
import { useEffect, useState } from "react";

export default function Option() {
    const [x, setX] = useState(370);
    const [a, setA] = useState(0);
    const [selectedString, setSelectedString] = useState('Selected');
    const [selectedOption, setSelectedOption] = useState('top-[10%]');

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const finalString = selectedString;

    var b = 0;
    var y = 101;

    useEffect(revealSelected, []);

    function revealSelected() {
        setX(0);
        var interval = setInterval(function() {
            // if(x == 370) clearInterval(interval);
            // setX(x + 1);
            setX((prevX):number => {
                if(prevX == 370) {
                    clearInterval(interval);
                    return prevX;
                }
                return prevX + 5;
            })
        }, 0)

        let iterations = -2;

        const interval2 = setInterval(function() {
            setSelectedString((currentString) : any => {
                return currentString.split("").map((letter, index) => {
                    if(index < iterations) {
                        return finalString[index];
                    }
                    if(letter == letter.toUpperCase()) {
                        return letters[Math.floor(Math.random() * 26)];
                    } else {
                        return letters[Math.floor(Math.random() * 26)].toLowerCase();
                    }
                }).join("");
            })

            iterations++;
            if(iterations == 8) {
                clearInterval(interval2);
                setSelectedString("Selected");
            }
        }, 50); 
    }

    function changeSelectedOption(x:string) {
        setSelectedOption(x);
        revealSelected();
    }

    return(
        <div className="bg-background1 h-[100vh] w-[100vw]">
            <Navbar />
            <div className="ml-[25vw] mt-[5vh] w-[50vw] h-[80vh]">
                <div className="font-researcher text-4xl w-[100%] text-center">
                    What do you want to do?
                </div>
                <div className="p-1 mt-[5vh] ml-[10vw] w-[30vw] h-[60vh] bg-gradient-to-br from-background1 to-green-600">
                    <div className="h-[100%] w-[100%] bg-background1">
                        <div className="h-[100%] w-[100%] bg-[#008F11]/15 border border-transparent">  
                            {/* Removing the transparent border will have disasterous consequences for reasons unkown to humanity */}
                            <div className="relative h-[90%] w-[80%] mt-[5%] ml-[10%] flex flex-col place-content-between">
                                <div className="hover:cursor-pointer select-none" onClick={() => changeSelectedOption('top-[10%]')}>
                                    <Options text="Port Scanning"/>
                                </div>
                                <div className="hover:cursor-pointer select-none" onClick={() => changeSelectedOption('top-[30%]')}>
                                    <Options text="Vulnearbility Checking"/>
                                </div>
                                <div className="hover:cursor-pointer select-none" onClick={() => changeSelectedOption('top-[50%]')}>
                                    <Options text="Port Scanning"/>
                                </div>
                                <div className="hover:cursor-pointer select-none" onClick={() => changeSelectedOption('top-[70%]')}>
                                    <Options text="Port Scanning"/>
                                </div>
                                <div className="hover:cursor-pointer select-none" onClick={() => changeSelectedOption('top-[90%]')}>
                                    <Options text="Port Scanning"/>
                                </div>
                                <div className={`absolute w-[16vw] h-[10vh] ${selectedOption} left-[5%] -translate-x-full -translate-y-full`}>
                                    <SelectedsvgVariableViewBox a={a} b={b} x={x} y={y} width={`16vw`} height={`10vh`}/>
                                    <div className="hehe absolute top-[12%] left-[15%] font-researcher text-xl">
                                        {selectedString}
                                    </div>
                                </div>  
                            </div>
                            {/* <button onClick={revealSelected}>Hehe x:{x} a:{a}</button> */}
                            {/* <button onClick={revealSelected}>Hehe {selectedOption}</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}