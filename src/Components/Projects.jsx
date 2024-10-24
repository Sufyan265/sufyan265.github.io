import React from 'react'
// import iNotebookImg from "./Images/iNotebook-project-img.png"
import project1 from "./Images/AirportTaxiCap.png";
import project2 from "./Images/videoSparks.png";
import project3 from "./Images/buttOilTraders.png";
import project4 from "./Images/InfoHub.png";
import project5 from "./Images/CloudChaser.png";

const projectData = [
    {
        id: 'airporttaxicab',
        background: "#D9A038",
        title: 'Birmingham Airport Taxi Cab Online Service',
        summary: 'A feature-rich and responsive MERN stack application developed for an online taxi service in the UK. Users can easily book taxis to and from Birmingham Airport, view fare estimates, and manage their bookings. The platform ensures a smooth user experience and secure data management with authentication features.',
        tools: ['MongoDB', 'Express', 'React', 'NodeJS', 'Mongoose', 'Custom API', 'JWT Authentication'],
        link: 'https://birminghamairporttaxicab.co.uk',
        imgSrc: project1
    },
    {
        id: 'videospark',
        background: "#282828",
        title: 'VideoSpark UI Design using React.js',
        summary: 'A visually stunning and highly responsive web application designed using React.js. The project showcases modern design principles with a focus on clean user interface, accessibility, and smooth user interactions, providing an elegant experience across all devices.',
        tools: ['React', 'Swiper.js', 'CSS', 'Hooks', 'React-icons', 'Responsive Design'],
        link: 'https://videospark.netlify.app',
        imgSrc: project2
    },    
    {
        id: 'buttOilTradersProject',
        background: "#e8b248",
        title: 'Butt Oil Traders E-Commerce Platform',
        summary: 'An advanced E-Commerce platform built using the MERN stack, tailored for trading engine oil and related products in Pakistan. The website allows users to browse and purchase engine oils, filters, and other automotive products with a smooth and secure shopping experience. It features real-time product management, user authentication, and a responsive design optimized for all devices.',
        tools: ['MongoDB', 'Express', 'React', 'NodeJS', 'Mongoose', 'Custom API', 'Bootstrap', 'React-router'],
        link: 'https://buttoiltraders.com',
        imgSrc: project3
    },  
    {
        id: 'cloudchaser',
        background: "#005666",
        title: 'Weather App using JavaScript',
        summary: 'A real-time weather application built with JavaScript that delivers accurate weather information based on the user\'s location. It helps users make informed decisions by providing up-to-date weather forecasts.',
        tools: ['JavaScript', 'HTML', 'CSS', 'Foreca Weather API', 'React-router', 'CanvasJS', 'Bootstrap'],
        link: 'https://cloudchaserapp.netlify.app',
        imgSrc: project5
    },
    {
        id: 'InfoHubProject',
        background: "#404042",
        title: 'News App using React.js',
        summary: 'A single-page application that fetches and displays the latest news articles. The app provides an intuitive and seamless user experience, allowing users to stay updated with current events.',
        tools: ['React', 'Context API', 'Hooks', 'CSS Modules', 'Styled-Components', 'BizToc API', 'Bootstrap 5'],
        link: 'https://sufyan265.github.io/InfoHub/',
        imgSrc: project4
    },
];

const Projects = () => {
    return (
        <>
            <section className='project_section' id='projectId'>
                <div className="container">
                    <h2 className='headingStyle'>RECENT PROJECTS</h2>
                </div>
                {projectData.map(project => (
                    <div className="projectContainer" style={{backgroundColor: project.background}} id={project.id} key={project.id}>
                        <div className="container">
                            <section className="project_Content">
                                <div className="row project_container">
                                    <div className="col-md-5 project_content_style">
                                        <h3 className='projectTitle'>{project.title}</h3>
                                        <p className='project_summary'>{project.summary}</p>
                                        <p className="tool_heading">Development technology & tools</p>
                                        <ul className="Development_custom_list">
                                            {project.tools.map(tool => (
                                                <li key={tool}>{tool}</li>
                                            ))}
                                        </ul>
                                        <a className="btn btn-outline-light" href={project.link} target='_blank' role="button">VIEW PROJECT</a>
                                    </div>
                                    <div className="col-md-7 project_img">
                                        <img src={project.imgSrc} style={{ scale: "1.1" }} alt="Project Screenshot" loading='lazy' />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Projects