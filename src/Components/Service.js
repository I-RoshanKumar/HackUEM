import React from 'react'

const Service = () => {
    const gradientStyle = {
        background: '-webkit-linear-gradient(bottom, gray, blue, blue)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
    return (
        <div className='w-4/5 min-h-[100vh] flex flex-col justify-center items-center mx-auto'>

            <div className='text-3xl md:text-4xl lg:text-5xl my-3 font-semibold text-center p-1 lg:p-3' >
                <div className='text-xl my-2 text-gray-500'>
                    Start your Journey Towards
                </div>
                <div style={gradientStyle} className='p-1 lg:p-2'>

                    Living Your Best Life
                </div>
            </div>

            <div className='text-xl my-2 text-center'>
                Experience the transformative power of our wellness services.
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 w-full gap-4 my-5 lg:w-full'>
                <div className='w-full flex flex-col p-5 justify-center rounded-xl boxshadow h-[400px] bg-[#2650f760] box1'>
                    
                    <div className='text-3xl font-bold my-1'>Name</div>
                    <div className='text-xl my-1'>Experience</div>
                    <div className='text-xl my-1'>Degree</div>
                    <div className='border-2 border-black w-[100px] my-1 p-1 flex justify-center rounded btnshadow font-bold  text-gray-600 '>Consult</div>
                </div>
                <div className='w-full flex flex-col p-5 justify-center rounded-xl boxshadow h-[400px] bg-[#2650f760] box2'>
                    
                    <div className='text-3xl font-bold my-1'>Name</div>
                    <div className='text-xl my-1'>Experience</div>
                    <div className='text-xl my-1'>Degree</div>
                    <div className='border-2 border-black w-[100px] my-1 p-1 flex justify-center rounded btnshadow font-bold  text-gray-600 '>Consult</div>
                </div>
                <div className='w-full flex flex-col p-5 justify-center rounded-xl boxshadow h-[400px] bg-[#2650f760] box3'>
                    
                    <div className='text-3xl font-bold my-1'>Name</div>
                    <div className='text-xl my-1'>Experience</div>
                    <div className='text-xl my-1'>Degree</div>
                    <div className='border-2 border-black w-[100px] my-1 p-1 flex justify-center rounded btnshadow font-bold  text-gray-600 '>Consult</div>
                </div>
                
            </div>
        </div>
    )
}

export default Service
