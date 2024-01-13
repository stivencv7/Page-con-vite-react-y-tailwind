import { IoIosSearch } from "react-icons/io";
import NavComponet from "../NavComponet/NavComponet";
import { useState } from "react";
import './style.css'

export const Header = ({div}) => {


    // function createRipple(event) {

    //     const button = event.currentTarget;

    //     const circle = document.createElement("span");
    //     const diameter = Math.max(button.clientWidth, button.clientHeight);
    //     const radius = diameter / 2;

    //     circle.style.width = circle.style.height = `${diameter}px`;
    //     circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    //     circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    //     circle.classList.add("ripple");

    //     const ripple = button.getElementsByClassName("ripple")[0];

    //     if (ripple) {
    //       ripple.remove();
    //     }

    //     button.appendChild(circle);
    //   }

    //   const buttons = document.getElementsByTagName("button");
    //   for (const button of buttons) {
    //     button.addEventListener("click", createRipple);
    //   }

    return (

        <header>

            <div className="w-full flex justify-between h-30 items-center  px-3 min-h-[64px] border-[#96969646] border-b-[0.1px]  border-solid">
                <button className="text-[13px] font-bold p-2">SUBSCRIBE</button>
                <h2 className="text-[24px] font-bold">Blog</h2>
                <div className="flex items-center gap-4">
                    <button className="p-1 "><IoIosSearch className="text-2xl font-bold text-white" /></button>
                    <button className="ripple text-[13px] leading-relaxed border-[1px] border-[rgba(255,255,255,0.23)] border-solid py-[3px] px-[9px] rounded-[4px] " >
                        <span className="uppercase">Sign up</span>
                        <span className="span"></span>
                    </button>

                    {div}
                </div>
                
            </div>

            <NavComponet />

        </header>
    )
}
