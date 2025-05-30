import React, { useEffect, useState } from 'react'
import favicon from "../../public/favicon-black.svg"
// import { Link } from 'react-router-dom';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const location = useLocation();

    const [navbarBg, setNavbarBg] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isHomeTop = location.pathname === "/" && window.scrollY === 0 && window.innerWidth > 992;
            setNavbarBg(!isHomeTop);
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname, window.innerWidth]);

    const navigate = useNavigate();
    const handleNavClick = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-light bg-light p-3 navbarStyle ${navbarBg ? '' : 'changeNavbarBg'}`}>
                <div className="container">
                    {/* <a className="navbar-brand" href="#"><img className='navbar_icon' src={favicon} alt="" loading='lazy' />Tech Studio</a> */}
                    <RouterLink className="navbar-brand" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img className='navbar_icon' src={favicon} alt="" loading='lazy' />Tech Studio</RouterLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto navListStyle">

                            <li className="nav-item">
                                <a className="nav-link mx-2 btn_animation" onClick={() => handleNavClick('aboutId')}>ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 btn_animation" onClick={() => handleNavClick('experienceId')}>EXPERIENCE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2 btn_animation" onClick={() => handleNavClick('projectId')}>WORK</a>
                            </li>
                            <li className="nav-item">
                                <RouterLink to="/contact" className="nav-link mx-2 btn_animation" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CONTACT</RouterLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
