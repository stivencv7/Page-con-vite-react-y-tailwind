import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Social = () => {
    return (
        <div className='mt-[10px] flex flex-col gap-2'>
            <h2 className='text-[20px]'>Social</h2>
            <ul className='flex flex-col gap-2'>
                <li><a className="text-[#90CAF9] flex gap-2"><IoLogoGithub className='text-[1.5rem]'/> GitHub</a></li>
                <li><a className="text-[#90CAF9] flex  gap-2"><FaTwitter className='text-[1.5rem]'/> Twitter</a></li>
                <li><a className="text-[#90CAF9] flex  gap-2"><FaFacebookSquare className='text-[1.5rem]'/> Facebook</a></li>
            </ul>
        </div>
    )
}
