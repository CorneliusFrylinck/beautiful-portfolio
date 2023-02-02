import React, { useState } from "react";

export default function WorkPage() {
    const [activeItem, setActiveItem] = useState(0);
    return(
        <div id="work" className="bg work-page">
            <h1 className="heading">Work Experience & Education</h1>
            <div className="experience-container">
                <div id="experience-list">
                    <p className={activeItem === 0 ? "active" : "experience-list-item"} onClick={() => setActiveItem(0)}><span>University</span></p>
                    <p className={activeItem === 1 ? "active" : "experience-list-item"} onClick={() => setActiveItem(1)}><span>Certifications</span></p>
                    <p className={activeItem === 2 ? "active" : "experience-list-item"} onClick={() => setActiveItem(2)}><span>Matogen</span></p>
                    <p className={activeItem === 3 ? "active" : "experience-list-item"} onClick={() => setActiveItem(3)}><span>iPlan</span></p>
                    <p className={activeItem === 4 ? "active" : "experience-list-item"} onClick={() => setActiveItem(4)}><span>Agile Bridge</span></p>
                </div>
                {activeItem === 0 &&
                <div className="experience-item">
                    <h1 className="exp-heading">North-West University</h1>
                    <p className="date">2017-2020</p>
                    <p>Graduated and received BSC. Information Technology.</p>
                    <p>Worked as student assistent, grading tests and assisting/grading practicals.</p>
                </div>
                }
                {activeItem === 1 &&
                <div className="experience-item">
                    <h1 className="exp-heading">Certifications</h1>
                    <p>IBM Cloud Developer</p>
                    <p>Azure: AZ-900, AZ-204</p>
                    <p>Multiple LinkedIn Certifications.</p>
                </div>
                }
                {activeItem === 2 &&
                <div className="experience-item">
                    <h1 className="exp-heading">Software Developer Intern at Matogen</h1>
                    <p className="date">March 2019 - July 2019</p>
                    <p>Worked on a chatbot UI and a virtual medical aid card using Angular and Angular Material.</p>
                </div>
                }
                {activeItem === 3 &&
                <div className="experience-item">
                    <h1 className="exp-heading">Junior Software Developer at iPlan Global</h1>
                    <p className="date">30 November 2021 - 28 February 2022</p>
                    <p>Worked on mobile and desktop applications and integrated with the SYSPRO ERP system.</p>
                </div>
                }
                {activeItem === 4 &&
                <div className="experience-item">
                    <h1 className="exp-heading">Junior Software Engineer at Agile Bridge</h1>
                    <p className="date">March 2022 - November 2022</p>
                    <p>Worked on systems that were re-built for Betway, mainly the UserVerification and EStatements systems.</p>
                    <h1 className="exp-heading">Intermediate Software Engineer at Agile Bridge</h1>
                    <p className="date">December 2022 - Current</p>
                    <p>Same responsibilities as above.</p>
                </div>
                }
            </div>
        </div>
    )
}