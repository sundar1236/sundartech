import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiFacebookCircleFill, RiGithubLine, RiLinkedinFill, RiTwitterXLine } from "@remixicon/react";

import logo from "../../assets/images/logos/stech-logo.webp"
import { menuList } from '../../utlits/fackData/menuList';

const Header = () => {
  const pathName = useLocation().pathname
  const [isSticky, setisSticky] = useState(false)
  
  useEffect(() => {
      const navbar_collapse = document.querySelector(".navbar-collapse")
      navbar_collapse.classList.remove("show")
  }, [pathName])

  useEffect(() => {
      window.addEventListener("scroll", stickyHeader)
      return () => window.removeEventListener("scroll", stickyHeader)
  }, [])

  const stickyHeader = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 85) {
          setisSticky(true)
      }
      else {
          setisSticky(false)
      }
  }
  return (
    <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* <!-- START LOGO DESIGN AREA --> */}
            <div className="logo-outer">
              <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" title="Logo" /></Link>
              </div>
            </div>
            {/* <!-- / END LOGO DESIGN AREA -->
                <!-- START NAV DESIGN AREA --> */}
            <div className="nav-outer clearfix mx-auto">
              {/* <!-- Main Menu --> */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link to="/">
                      <img src={logo} alt="Logo" title="Logo" />
                    </Link>
                  </div>
                  {/* <!-- Toggle Button --> */}
                  <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation clearfix">
                    {menuList.map(({id, label, path}) => <li key={id}><Link className="nav-link-click" to={path}>{label}</Link></li>)}
                  </ul>
                </div>
              </nav>
              {/* <!-- / END NAV DESIGN AREA --> */}
            </div>
            <div className="about-social text-center">
              <ul>
                <li><Link to=""><i><RiFacebookCircleFill size={20} /></i>  </Link></li>
                <li><Link to=""><i><RiTwitterXLine size={20} /> </i></Link></li>
                <li><Link to="https://www.linkedin.com/in/sundar-j/"><i><RiLinkedinFill size={20} /></i></Link></li>
                <li><Link to=""><i><RiGithubLine size={20} /></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header