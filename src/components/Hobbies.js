import React from 'react'
import "./Hobbies.css"
import CodeIcon from '@mui/icons-material/Code';
import CookieIcon from '@mui/icons-material/Cookie';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

function Hobbies() {
  return (
    <div className='hobbies'>
        <div className='container'>
            <h2>HOBBIES</h2>
            <div className='hobbies_icons'>
                <li><CodeIcon /><p>Learning <br /> Code</p> </li>
                <li><CookieIcon /><p>Cooking</p> </li>
                <li><SportsCricketIcon/> <p>Cricket</p> </li>
                <li><SportsKabaddiIcon />  <p>Kabaddi</p> </li>
                <li><SportsTennisIcon /> <p>Badmination</p> </li>
            </div>
        </div>
    </div>
  )
}

export default Hobbies