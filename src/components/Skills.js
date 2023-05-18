import React from 'react'
import "./Skills.css"

function Skills() {
  return (
    <div className='skills'>
        <div className='container'>
            <h2>SKILLS</h2>
            <div className='row'>
                <div className='col'>
                    <div className='skills_range'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>REACTJS</li>
                        <li>SQL</li>
                        <li>MS Office</li>
                        <li>Photoshop</li>
                        <li>UI DESIGN</li>
                    </div>
                </div>
                <div className='col'>
                    <h2 className='training'>ADDITIONAL TRAINING</h2>
                    <div className='training_details'>
                    <li><h3>ENABLE INDIA</h3>
                        <p>Career Awareness Workshop for Persons with Disability
                            Basic Employability Awareness.</p></li>
                            <li><h3>BOOARNY</h3>
                        <p>Web Design (Front end Developer).</p></li>
                            <li><h3>IECD</h3>
                        <p> 1. Specialized Diploma in Desktop Publishing: Frist Class. <br />
                            2. Certificate in Computer Hardware & Networking: First Class.</p></li>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills