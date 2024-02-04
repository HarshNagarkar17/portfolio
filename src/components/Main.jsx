import React, { useEffect } from 'react';
import { Work } from './Work';
import { Skills } from './Skills';
import { Projects } from './Projects';
export const Main = () => {
    return (
        <div className='flex flex-col md:flex-row text-white lg:p-16 md:p-8'>
            {/* <div className='p-10 lg:p-10 md:p-6 flex-none md:flex md:flex-col md:justify-start md:items-start
             relative w-40'>
                <ul className='nunito font-medium text-lg flex md:flex-col fixed'>
                    <li className='md:my-3 mx-3 hover:font-[600]'><a href="" className='font-menu'>About</a></li>
                    <li className='md:my-3 mx-3'><a href="" className='font-menu'>Work</a></li>
                    <li className='md:my-3 mx-3'><a href="" className='font-menu'>Skills</a></li>
                    <li className='md:my-3 mx-3'><a href="" className='font-menu'>Projects</a></li>
                </ul>
            </div> */}
            <div className='p-10 lg:p-10 md:p-6 flex flex-col flex-grow'>
                <div className='nunito'>
                    <p className='text-xl font-[100]' style={{ color: "#8893AE", textDecoration: "underline" }}>Introduction</p>
                    <h1 className='mt-6 text-6xl' style={{ letterSpacing: "-.05em", color: "#CCD7F7" }}>
                        Hey, I'm Harsh Nagarkar.
                    </h1>
                    {/* <div id="typewriter" class="read-width">
                        <span id="sentence">
                            <span id="t1" class="type-text mt-6 text-6xl" style={{ letterSpacing: "-.05em", color: "#CCD7F7" }}></span>
                            <span id="t2" class="type-text mt-6 text-6xl" style={{ letterSpacing: "-.05em", color: "#CCD7F7",lineHeight:".9" }}></span>
                        </span>
                    </div> */}
                    {/* <p className='text-2xl mt-8' style={{ color: "#8A95B0" }}>I'm actively building a robust foundation in the MERN stack. Passionate about software development, I'm dedicated to crafting
 engaging visual identities and creating memorable user experiences.</p> */}
                    <p className='text-2xl mt-8' style={{ color: "#8A95B0" }}>
I'm actively building a robust foundation in the MERN stack. Passionate about software development, I'm dedicated to crafting
 engaging visual identities and creating memorable user experiences. Eager to contribute my evolving skills to innovative projects!</p>
                </div>
                <Work />
                <Skills />
                <Projects />
            </div>
        </div>
    );
};
