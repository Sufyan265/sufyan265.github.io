import React from 'react'
import { Link } from 'react-router-dom'
import ButtonGroup from '../ButtonGroup'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row d-flex justify-content-between footer_container px-5">
                        <div className="col-md-7 footer_left">
                            <h4 className="headingStyle">Need a web developer? Let's build something amazing together.</h4>
                            <ButtonGroup />
                        </div>
                        <div className="col-md-3 footer_right">
                            <ul className="Development_custom_list socialMediaLinks">
                                <li><a href="https://github.com/Sufyan265" target='_blank'>GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/muhammad-sufyan-b57886302" target='_blank'>LinkedIn</a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=61558659832300" target='_blank'>Facebook</a></li>
                                <li><a href="https://wa.me/+923430167265" target='_blank'>Whatsapp</a></li>
                                <li><a href="https://www.instagram.com/sufideveloper/" target='_blank'>Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='copyright_txt'>&copy; Copyright 2024 - <Link to='/' className='btn_animation copyright_name' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Muhammad Sufyan</Link></div>
                </div>
            </footer>
        </>
    )
}

export default Footer
