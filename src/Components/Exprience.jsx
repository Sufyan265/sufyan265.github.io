import React from 'react'
import './sectionStyle.css'

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
                    Proactive Front-End Web Developer Crafting Engaging User Experiences
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Freelance Projects</h4>
                    <ul>
                      <li>Developed responsive and interactive websites using HTML, CSS, and JavaScript.</li>
                      <li>Crafted dynamic user interfaces with React.</li>
                      <li>Utilized Bootstrap to design mobile-friendly and visually appealing web pages.</li>
                      <li>Ensured cross-browser compatibility and optimized site performance.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Interactive Full-Stack Developer Fostering Seamless Web Solutions
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Freelance Projects</h4>
                    <ul>
                      <li>Engineered full-stack web applications using NodeJS, Express, and MongoDB.</li>
                      <li>Seamlessly integrated front-end and back-end components for immersive user experiences.</li>
                      <li>Developed RESTful APIs for efficient data management and interaction.</li>
                      <li>Orchestrated version control and collaboration with GitHub.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Dynamic Web Developer Intern Contributing to Innovative Web Projects
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Tech Solutions Inc.</h4>
                    <ul>
                      <li>Assisted in developing and maintaining client websites.</li>
                      <li>Addressed bugs and implemented enhancements using JavaScript and React.</li>
                      <li>Collaborated with senior developers to enforce coding standards and best practices.</li>
                      <li>Contributed to agile development and project management processes.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Innovative Back-End Developer Pioneering Robust Server-Side Solutions
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Freelance Projects</h4>
                    <ul>
                      <li>Engineered server-side logic using NodeJS and Express.</li>
                      <li>Implemented and managed database schemas with MongoDB.</li>
                      <li>Ensured data security and integrity through rigorous authentication and validation.</li>
                      <li>Optimized server performance and scalability to enhance user experience.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Web Developer Intern at Enigmatix Software House in Bahawalpur City
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4>Enigmatix Software House</h4>
                    <ul>
                      <li>Assisted in developing and maintaining client websites.</li>
                      <li>Addressed bugs and implemented enhancements using JavaScript and React.</li>
                      <li>Collaborated with senior developers to enforce coding standards and best practices.</li>
                      <li>Contributed to agile development and project management processes.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </section>
      </div >
    </>
  )
}

export default Exprience
