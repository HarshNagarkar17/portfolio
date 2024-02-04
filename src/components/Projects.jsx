import React from 'react'

export const Projects = () => {
    return (
        <div className='pt-8'>
            <div className='p-4 ps-0 border-b nunito'>
                <span className='text-xl font-normal'>Projects</span>
            </div>
            <div>
                <div>
                    <a href="https://github.com/HarshNagarkar17/MERN-VideoCollab" target='_blank'><div className='nunito rounded-xl mt-6 px-6 py-3' style={{ color: "#CCD7F7", border: "1px solid #8893AE" }}>
                        <h3 className='text-xl'>VideoCollab</h3>
                        <p className='font-normal text-xs' style={{color:"#8A95B0"}}>Mern Stack</p>
                        <p className='text-sm pt-2'>A dynamic web application that enables users to engage in peer-to-peer real-time video 
                        calls while simultaneously sharing a collaborative whiteboard.</p>
                    </div></a>
                    <a href="https://github.com/HarshNagarkar17/ReadConnect" target='_blank'><div className='nunito rounded-xl mt-6 px-6 py-3' style={{ color: "#CCD7F7", border: "1px solid #8893AE" }}>
                        <h3 className='text-xl'>ReadConnect</h3>
                        <p className='font-normal text-xs' style={{color:"#8A95B0"}}>Mern Stack</p>
                        <p className='text-sm pt-2'>Explore, acquire, and review beloved books on our platform. Connect with fellow book lovers, sharing recommendations and engaging in a 
                        vibrant community dedicated to the joy of reading. Join us in celebrating the power of storytelling!</p>
                    </div></a>
                    <a href="https://github.com/HarshNagarkar17/Conet-git" target='_blank'><div className='nunito rounded-xl mt-6 px-6 py-3' style={{ color: "#CCD7F7", border: "1px solid #8893AE" }}>
                        <h3 className='text-xl'>Conet</h3>
                        <p className='font-normal text-xs' style={{color:"#8A95B0"}}>Mern Stack</p>
                        <p className='text-sm pt-2'>Create a seamless online hub for college students with our College Networking website. Foster connections, share resources, and stay updated on campus events. Empower students to engage, collaborate, and enhance 
                        their academic journey through a tailored digital platform designed exclusively for the college community.</p>
                    </div></a>
                </div>
            </div>
        </div>
    )
}
