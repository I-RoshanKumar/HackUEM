import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [open, setopen] = useState(false);
    
    return (
        <header className=''>
            <nav className='hidden lg:flex justify-around  bg-[#5c7bf6db] p-8'>
                <div>
                    <div className='font-semibold text-xl '>Hackathon</div>
                </div>
                <div className='flex gap-20'>
                    <a href="/">
                        <div className='nav-link '>Home</div>
                    </a>
                    <a href="/about">
                        <div className='nav-link'>About</div>
                    </a>
                    <a href="/service">
                        <div className='nav-link'>Service</div>
                    </a>
                    <a href="/blog">
                        <div className='nav-link'>Blog</div>
                    </a>
                    
                </div>
            </nav>

            <nav className='flex  lg:hidden flex-col bg-[#5c7bf6db] p-8'>
                <div className='flex justify-between'>
                    <div className='font-semibold text-xl '>Hackathon</div>
                    <div>
                        {open == false ? (<FaBars onClick={() => {
                            setopen(!open)
                        }} className='text-3xl cursor-pointer' />) :
                            (
                                <IoClose onClick={() => {
                                    setopen(!open)
                                }} className='text-3xl cursor-pointer' />)}
                    </div>
                </div>
                {open && <div className='flex flex-col justify-center items-center ' style={{ transition: "2s all linear" }}>
                    <a href="/" className='w-full'>
                        <div className='w-full py-2 hover:bg-[#7dc5ffdb] text-center rounded m-1'>Home</div>
                    </a>
                    <a href="/about" className='w-full'>

                        <div className='w-full py-2 hover:bg-[#7dc5ffdb] text-center rounded m-1'>About</div>
                    </a>
                    <a href="/service" className='w-full'>
                        <div className='w-full py-2 hover:bg-[#7dc5ffdb] text-center rounded m-1'>Service</div>
                    </a>
                    <a href="/blog" className='w-full'>
                        <div className='w-full py-2 hover:bg-[#7dc5ffdb] text-center rounded m-1'>Blog</div>
                    </a>
                    
                </div>}
            </nav>
        </header>
    )
}

export default Header
