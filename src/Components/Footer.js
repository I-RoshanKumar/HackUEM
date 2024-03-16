import React from 'react'
import { FaFacebook, FaInstagram, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='p-5 h-[40vh] bg-[#2650f760] flex justify-center items-center flex-col mt-9'>
            <div className='text-2xl lg:text-3xl'>Hackathon</div>
            
            <div className='flex gap-11 my-4 lg:text-xl'>
                <div><FaFacebook className='text-2xl lg:text-3xl'/></div>
                <div><FaInstagram className='text-2xl lg:text-3xl'/></div>
                <div><FaTwitter className='text-2xl lg:text-3xl'/></div>
                <div><FaLinkedin className='text-2xl lg:text-3xl'/></div>
            </div>

            <div className='bg-blue-400 cursor-pointer my-4 px-4 rounded-3xl font-semibold border-2 border-black'>
                <input type="text" className='min-w-[300px] p-3 outline-none bg-blue-400 placeholder:text-gray-600' placeholder='Enter Email'/>
                Subscribe
            </div>
        </footer>
    )
}

export default Footer
