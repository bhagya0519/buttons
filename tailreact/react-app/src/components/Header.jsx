import React, { useState } from 'react'

import {AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle,setToggle] = useState(false);
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1246px] py-[12px] items-center flex justify-between mx-auto'>
                <div className='text-3xl font-bold'>
                    Obii Creationz
                </div>
                <AiOutlineMenuFold onClick={{} => setToggle{!toggle}} className='text-white text-2xl md:hidden block'/>
                <AiOutlineClose className='text-white text-2xl md:hidden block' />
                <ul className='hidden md:flex text-white gap-10'>
                    <li>
                        Home
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                {/* Responsive menu */}
                <ul className='md:hidden w-full h-screen text-white fixed bg-black left-[-100%] top-[92px]'>
                    <li className='p-5'>
                        Home
                    </li>
                    <li className='p-5'>
                        Company
                    </li>
                    <li className='p-5'>
                        Resources
                    </li>
                    <li className='p-5'>
                        About
                    </li>
                    <li className='p-5'>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    )
}