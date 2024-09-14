import React from 'react';
import './sectionStyle.css';

const Exprience = () => {
  return (
    <>
      <div className="container">
        <section id='experienceId'>
          <div className="exprience">
            <h2 className='headingStyle'>EXPERIENCE</h2>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Full Stack Developer Creating Comprehensive Web Solutions
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Freelance Projects</h4>
                    <ul>
                      <li>Developed full-stack web applications using the MERN stack (MongoDB, Express, ReactJS, Node.js).</li>
                      <li>Designed responsive user interfaces with React, Bootstrap, and Tailwind.</li>
                      <li>Implemented server-side logic with Node.js and Express for efficient API development.</li>
                      <li>Handled data storage and management with MongoDB, ensuring high scalability.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Web Developer Intern at Enigmatix Software House, Bahawalpur
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Enigmatix Software House</h4>
                    <ul>
                      <li>Assisted in developing and maintaining client websites with JavaScript, React, and Bootstrap.</li>
                      <li>Fixed bugs and enhanced the user experience by implementing UI improvements.</li>
                      <li>Collaborated with senior developers to ensure coding standards and best practices were followed.</li>
                      <li>Participated in agile development processes, including project management and sprint planning.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Backend Developer Delivering Scalable Server-Side Solutions
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Freelance Projects</h4>
                    <ul>
                      <li>Developed RESTful APIs using Node.js and Express.</li>
                      <li>Ensured data security and validation with robust authentication and authorization techniques.</li>
                      <li>Managed database operations with MongoDB, ensuring efficient data retrieval and updates.</li>
                      <li>Optimized server performance and scalability for large-scale web applications.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Frontend Developer Focused on Engaging User Interfaces
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Freelance Projects</h4>
                    <ul>
                      <li>Designed and developed responsive and dynamic UIs using React, Bootstrap, and Tailwind CSS.</li>
                      <li>Improved user experience by optimizing UI performance and implementing interactive features.</li>
                      <li>Ensured cross-browser compatibility and mobile-first design principles were followed.</li>
                      <li>Collaborated with backend developers to integrate front-end designs with server-side logic.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default Exprience;
