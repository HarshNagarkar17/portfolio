import React from 'react'

export const Nav = () => {
  return (
    <nav>
        <div className="header">
            {/* <a href="Harsh_Nagarkar_Resume.pdf" download={true}>Download Resume <i class='bx bx-download'></i></a> */}
            <div className="social-media-icons">
                    <a href="https://www.linkedin.com/in/harsh-nagarkar/" target="_blank"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://twitter.com/hnx246" target="_blank"><i className='bx bxl-twitter'></i></a>
                    <a href="https://github.com/HarshNagarkar17/" target="_blank"><i className='bx bxl-github'></i></a>
                </div>
        </div>

        {/* <div className="header-modal">
        </div> */}
    </nav>
  )
}
