import React, { useEffect, useRef } from 'react'
import personImg from "./Images/person.png"
import Typed from 'typed.js';
import ButtonGroup from '../ButtonGroup';

const LandingLayout = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Freelance Web Developer for your Custom applications", "Innovative Web Applications for Modern Businesses", "Reliable Partner in Digital Transformation", "Bringing Your Ideas to Life with MERN Stack"],

            typeSpeed: 25,
            backSpeed: 25,
            backDelay: 2000, // Add delay between backspace and start typing the next string
            // startDelay: 500, // Add delay before typing starts
            loop: true,
            cursorChar: '┃',
        });

        // Destroy Typed instance on component unmounting to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className="landingLayout_section">
                <div className="container">
                    <div className="landingLayout_container">
                        <div className="person-content">
                            <p>Hi, My name is</p>
                            <h2 className='name'>Muhammad Sufyan</h2>
                            <h1 ref={el} className="auto-type"></h1>
                            <ButtonGroup />
                        </div>
                        <div className="person-img">
                            <img src={personImg} alt="" />
                        </div>
                        {/* <div className="imgDesign">
                            <img src={personImg} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingLayout
