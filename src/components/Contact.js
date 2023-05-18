import React from 'react'
import "./Contact.css"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <div className='Contact'>
        <div className='container'>
            <h2>CONTACT</h2>
            <div className='row'>
                <div className='col'>
                    <div className='contact_icons'>
                <li><a href="#!"><CallIcon /></a>+91-7708913135</li>
                <li><a href="#!"><EmailIcon /></a>kaushikvigu@gmail.com</li>
                <li><a href="#!"><LinkedInIcon /></a>https://www.linkedin.com/in/kaushik-v-43a959216/</li>
                <li><a href="#!"><LocationOnIcon /></a>Thanjavur, Tamil Nadu</li>
                    </div>
                </div>
                <div className='col-1'>
                    <h2>EDUCATION</h2>
                    <div className='education_icons'>
                        <li>2019 - 2023</li>
                        <h4>B.Tech</h4>
                        <span>Kalasalingam Unversity</span> <br />
                        <strong>CGPA 8.72</strong>
                        <li>2016 - 2018</li>
                        <h4>NIOS</h4>
                        <span>Kalasalingam Unversity</span> <br />
                        <strong>56.4%</strong>
                        <li>2006 - 2016</li>
                        <h4>SSLC</h4>
                        <span>Maharishi Vidya Mandir</span> <br />
                        <strong>93%</strong>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact