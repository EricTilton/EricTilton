import { useEffect, useRef } from 'react'

import LogoS from '../../../assets/images/logo-s.png'
import LogoE from '../../../assets/images/logo-e.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoE}
        alt="JavaScript,  Developer"
      />

      <svg
        width="1000pt"
        height="1000pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          
        </g>
      </svg>
    </div>
  )
}

export default Logo