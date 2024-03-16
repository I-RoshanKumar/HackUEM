import React from 'react'

const Hero = () => {
    const gradientStyle = {
        background: '-webkit-linear-gradient(bottom, #a1a5a9, blue, skyblue)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
    return (
        <>
            <div className='min-h-[100vh] flex items-center justify-center hero'>
                <div className=' flex items-center justify-center'>
                    <div className='text-3xl md:text-5xl lg:text-7xl '>
                        <div style={gradientStyle} className='p-9'>

                            <div className=' leading-14 font-semibold text-center'>Let Me Help You </div>
                            <div className=' leading-14 font-bold text-center mt-4'>Overcome Challenges</div>
                        </div>
                        <div className='md:text-xl  lg:text-3xl  text-center my-4'>Personalized Care to Help You Live  Your Best Life With Us!</div>
                        <div className='text-center my-4'>
                            <button className='btnshadow  my-4 p-2 rounded-full text-xl px-6 text-gray-800 font-semibold border-2 border-blue-600'>Join Experts</button>
                        </div>

                    </div>
                </div>
                <div className='absolute w-[400px] h-[400px] ball top-1/3 rounded-full z-[-30] opacity-80'>
                </div>
                <div className='absolute w-[200px] h-[200px] ball  rounded-full z-[-30] opacity-80 top-0'>
                </div>
                <div className='absolute w-[200px] h-[200px] ball  rounded-full z-[-30] opacity-80 bottom-0 left-[-100px]'>
                </div>
                <div className='absolute w-[200px] h-[200px] ball  rounded-full z-[-30] opacity-80 bottom-0 right-0 '>
                </div>
                <div className='absolute w-[200px] h-[200px] ball  rounded-full z-[-30] opacity-80 top-[80px] left-0 '>
                </div>
            </div>
        </>

    )
}

export default Hero
