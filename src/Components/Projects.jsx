import React from 'react'
import iNotebookImg from "./Images/iNotebook-project-img.png"
import InfoHubImg from "./Images/InfoHub-project-img.png"
import CloudChaserImg from "./Images/CloudChaser-project-img.png"
import FlashFotoImg from "./Images/FlashFoto-project-img.png"

const Projects = () => {

return (
    <>
        <section className='project_section' id='projectId'>
            <div className="container">
                <h2 className='headingStyle'>RECENT PROJECTS</h2>
            </div>

            {/* 1st Project section ↓ */}
            <div className="projectContainer" id='firstProject'>
                <div className="container">
                    <section className="project_Content">
                        <div className="row project_container">
                            <div className="col-md-5 project_content_style">
                                <h3 className='projectTitle'>Store Your Notes in Cloud</h3>
                                <p className='project_summary'>A secure and efficient MERN stack application designed for storing and managing notes in the cloud. Users can create, edit, and delete notes, ensuring safe and accessible data from anywhere.</p>
                                <p className="tool_heading">Development technology & tools</p>
                                <ul className="Development_custom_list">
                                <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                    <li>Mongoose</li>
                                    <li>Custom API</li>
                                    <li>JWT Authentication</li>
                                </ul>
                                <a className="btn btn-outline-light" href="https://inotebook-gamma-dusky.vercel.app/" target='_blank' role="button">VIEW PROJECT</a>
                            </div>
                            <div className="col-md-7 project_img">
                                <img src={iNotebookImg} alt="" loading='lazy' />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* 2nd Project section ↓ */}
            <div className="projectContainer" id='secondProject'>
                <div className="container">
                    <section className="project_Content">
                        <div className="row project_container">
                            <div className="col-md-5 project_content_style">
                                <h3 className='projectTitle'>News App using React.js</h3>
                                <p className='project_summary'>A single-page application that fetches and displays the latest news articles. The app provides an intuitive and seamless user experience, allowing users to stay updated with current events.</p>
                                <p className="tool_heading">Development tools</p>
                                <ul className="Development_custom_list">
                                    <li>React</li>
                                    <li>Context API</li>
                                    <li>Hooks</li>
                                    <li>CSS Modules</li>
                                    <li>Styled-Components</li>
                                    <li>BizToc API</li>
                                    <li>Bootstrap 5</li>
                                </ul>
                                <a className="btn btn-outline-light" href="https://sufyan265.github.io/InfoHub/" target='_blank' role="button">VIEW PROJECT</a>
                            </div>
                            <div className="col-md-7 project_img">
                                <img src={InfoHubImg} alt=""  loading='lazy' />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* 3rd Project section ↓ */}
            <div className="projectContainer" id='thirdProject'>
                <div className="container">
                    <section className="project_Content">
                        <div className="row project_container">
                            <div className="col-md-5 project_content_style">
                                <h3 className='projectTitle'>Weather App using JavaScript</h3>
                                <p className='project_summary'>A real-time weather application built with JavaScript that delivers accurate weather information based on the user's location. It helps users make informed decisions by providing up-to-date weather forecasts.</p>
                                <p className="tool_heading">Development tools</p>
                                <ul className="Development_custom_list">
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Foreca Weather API</li>
                                    <li>CanvasJS</li>
                                    <li>Bootstrap</li>
                                </ul>
                                <a className="btn btn-outline-light" href="https://cloudchaserapp.netlify.app/" target='_blank' role="button">VIEW PROJECT</a>
                            </div>
                            <div className="col-md-7 project_img">
                                <img src={CloudChaserImg} alt="" loading='lazy' />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* 4th Project section ↓ */}
            <div className="projectContainer" id='forthProject'>
                <div className="container">
                    <section className="project_Content">
                        <div className="row project_container">
                            <div className="col-md-5 project_content_style">
                                <h3 className='projectTitle'>Responsive Website using HTML and CSS</h3>
                                <p className='project_summary'>A fully responsive website designed and developed using HTML and CSS. This project ensures an optimal viewing experience across various devices and screen sizes, providing a seamless user experience.</p>
                                <p className="tool_heading">Development tools</p>
                                <ul className="Development_custom_list">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Media Queries</li>
                                    <li>Flexbox</li>
                                    <li>Grid Layout</li>
                                    <li>Responsive Design Principles</li>
                                </ul>
                                <a className="btn btn-outline-light" href="https://flashfoto.netlify.app/" target='_blank' role="button">VIEW PROJECT</a>
                            </div>
                            <div className="col-md-7 project_img">
                                <img src={FlashFotoImg} alt="" loading='lazy' />
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </section>
    </>
)
}

export default Projects
