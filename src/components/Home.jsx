import React from 'react'
import { Nav } from './Nav'
import { Hero } from './Hero'
import { Skills } from './Skills'
import { Main } from './Main'
import { Work } from './Work'

export const Home = () => {
    return (
        <div>
            <div style={{ background: "#0B192E" }} className='w-100 h-100'>
                <div className='container mx-auto'>
                    {/* <Nav />
                    <Hero /> */}
                    <Main/>
                    {/* <Work/> */}
                </div>
            </div>
            {/* <div style={{background:"#2D262E"}}>
                <div className='container mx-auto'>
                <Skills/>
                </div>
            </div> */}
        </div>
    )
}
