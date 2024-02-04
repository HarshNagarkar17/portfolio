import React from 'react'

export const Skills = () => {
  return (
    <div className='pt-14'>
      <div className='p-4 ps-0 border-b nunito'>
        <span className='text-xl font-normal'>Skills</span>
      </div>
      <div className='pt-6'>
        <div className='nunito flex flex-wrap gap-10'>
          <div className='rounded p-2'>
            {/* <p className='font-medium text-xl'>Frontend</p> */}
            <ul className='flex flex-wrap'>
            <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>HTML</li></a>
              <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>CSS</li></a>
             <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>Tailwind CSS</li></a>
             <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>JavaScript</li></a>
             <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>ReactJs</li></a>
             <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>NodeJs</li></a>
             <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>ExpressJs</li></a>
             <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>C++</li></a>
             <a href="" className='mx-2 my-3'><li className='text-sm font-normal rounded px-2 py-1' 
            style={{color:"#CCD7F7",border:"1px solid #8893AE"}}>SQL</li></a>
            </ul>
          </div>
           {/* <div className='rounded p-2' style={{border:"1px solid #8893AE"}}>
            <p className='font-medium text-xl'>Backend</p>
            <ul className='flex pt-4'>
              <li className='text-sm font-normal' style={{color:"#CCD7F7"}}>NodeJs</li>
              <li className='text-sm font-normal mx-3' style={{color:"#CCD7F7"}}>ExpressJs</li>
            </ul>
          </div> */}
           {/* <div className='rounded p-2' style={{border:"1px solid #8893AE"}}>
            <p className='font-medium text-xl'>Database</p>
            <ul className='flex pt-4'>
              <li className='text-sm font-normal' style={{color:"#CCD7F7"}}>MySql</li>
              <li className='text-sm font-normal mx-3' style={{color:"#CCD7F7"}}>MongoDB</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}
