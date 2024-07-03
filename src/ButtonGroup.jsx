import React from 'react'
import { Link } from 'react-router-dom'
import resume from "../public/frontend-resume.pdf"

const ButtonGroup = () => {
    return (
        <>
            <div className="contact_input_group btn_group">
                <Link to="/contact" type="button" className="btn btn-outline-dark contact_button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Get In Touch</Link>

                <a type="button" className="btn btn-outline-dark contact_button download_cv_btn" href={resume} download="web-developer-cv.pdf"><i className="fa-solid fa-cloud-arrow-down"></i>Download CV</a>
            </div>
        </>
    )
}

export default ButtonGroup
