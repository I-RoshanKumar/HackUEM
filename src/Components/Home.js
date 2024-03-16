
import React, { useState } from 'react'
import Hero from './Hero'

import About from './About'
import Service from './Service'
import Footer from './Footer'
import { SiChatbot } from "react-icons/si";
import Chatbot from './Chatbot'

const Home = () => {
    const [open, setopen] = useState(false);
    return (
        <div className=''>
            <div>
                <Hero />
                <hr className='h-[5px] line w-4/5 mx-auto' />
                <About />
                <hr className='h-[5px] line w-4/5 mx-auto' />
                <Service />
                <Footer />
            </div>
            <div className='fixed bottom-12 right-12 cursor-pointer bg-blue-300 p-2 rounded-2xl border-2 border-black'>

                <SiChatbot className='text-4xl' onClick={() => {
                    setopen(prevOpen => !prevOpen);
                }} />

            </div>

            {open && <Chatbot />}

        </div>
    )
}

export default Home
