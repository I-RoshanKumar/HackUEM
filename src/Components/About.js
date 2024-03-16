import React from 'react';

const About = () => {
  const gradientStyle = {
    background: '-webkit-linear-gradient(bottom, gray, blue, blue)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  return (
    <div className='w-4/5 min-h-[100vh] flex flex-col justify-center items-center mx-auto'>
      <div className='text-xl lg:text-2xl text-center my-4 leading-9 lg:leading-[35px] '>
        Mental health is just as crucial as physical health. Taking the time to prioritize self-care and addressing any mental health concerns can drastically improve overall well-being and lead to a happier, more fulfilling life. It's okay to not be okay, and seeking help and resources is a courageous step towards self-improvement and growth. Poor mental health can lead to a range of problems, including anxiety, depression, stress, burnout, among others. Taking care of our mental health can lead to improved productivity, enhanced relationships, and a better quality of life.
      </div>
      <div className='text-3xl md:text-4xl lg:text-5xl my-4 font-semibold text-center ' style={gradientStyle}>
        Mental Health Issues We Deal With
      </div>
      <div className='grid grid-flow-col w-4/5 lg:w-full  mx-auto overflow-x-scroll mentalType my-4 gap-4'>

        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Anxiety Disorders
        </div>

        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Mood Disorders

        </div>

        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Psychotic Disorders

        </div>

        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Eating Disorders

        </div>
        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Personality Disorders

        </div>
        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Obsessive-Compulsive and Related Disorders

        </div>

        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Neurodevelopmental Disorders

        </div>

        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Substance-Related and Addictive Disorders

        </div>

        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Neurocognitive Disorders

        </div>
        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Sleep Disorders

        </div>
        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Somatoform Disorders

        </div>
        <div className=" flex flex-col justify-center items-center my-2 w-[250px] h-[150px] text-center bg-[#2650f760] text-xl font-semibold">
          Dissociative Disorders

        </div>
      </div>
    </div>
  );
};

export default About;
