import React from 'react';
import './sectionStyle.css';

const About = () => {
    return (
        <>
            <div className="container aboutContainer">
                <section className="about_section" id='aboutId'>
                    <h2 className='headingStyle'>ABOUT</h2>
                    <div className="about_content">
                        <p>My name is Muhammad Sufyan, and I am a passionate Full Stack Developer specializing in building robust and dynamic web applications. My expertise spans both frontend and backend development, allowing me to create complete solutions tailored to your needs.</p>

                        <p><strong>Frontend Skills</strong>: I excel in using modern technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind, ReactJS, and Next.js to design responsive, visually appealing user interfaces that provide seamless user experiences.</p>

                        <p><strong>Backend Skills</strong>: On the backend, I leverage Node.js, Express.js, MongoDB (MERN stack), and Firebase to develop scalable, efficient server-side applications that power web platforms.</p>

                        <p>My journey in web development began with a deep fascination with how websites function. Over time, I have continuously refined my skills to offer comprehensive solutions that span the entire development process—from creating sleek UI components to building secure, performant backend services.</p>

                        <p>I am committed to staying updated with the latest industry trends and technologies to ensure I deliver cutting-edge solutions. Whether you need a complex web app or a simple website, I prioritize understanding your unique requirements to provide solutions that exceed expectations. With a focus on clear communication, timely delivery, and high-quality code, I am dedicated to turning your ideas into reality.</p>

                        <p>Let’s connect and discuss how I can help you achieve your web development goals. Whether you have full stack development needs or simply want to say hello, feel free to reach out. I look forward to the opportunity to collaborate and create something exceptional together.</p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;