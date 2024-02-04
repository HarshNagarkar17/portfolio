import React from 'react'

export const Hero = () => {
  return (
    <div className='text-center pt-16 pb-12'>
        <div><img src="" alt="" /></div>
        <div><h1 className='sm:text-5xl text-3xl font-mono nunito font-[700]' style={{color:"#F6F7F6"}}>Hi, I'm <span className='left-span'>&lt;/</span>someone coder
        <span className='right-span'>/&gt;</span></h1> </div>
        <div className='xs:w-full sm:w-1/2 text-center mx-auto'><p className='nunito text-gray-500 font-semibold mt-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eum! Repudiandae dolorem ab porro vero pariatur qui rerum excepturi reprehenderit?</p></div>
        <div className='mt-8'><button className='px-3 py-2 rounded-sm font-bold nunito' style={{backgroundColor:"#4EE3C0"}}>React Out</button></div>
    </div>
  )
}
