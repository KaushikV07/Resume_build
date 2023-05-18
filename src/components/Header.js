    import React from 'react'
    import "./Header.css"


    function Header() {
      return (
        <div className='header'>
          <div className='container'>
            <h1>KAUSHIK V</h1>
            <h3>Web Development</h3>
            <div className='row'>
              <div className='col'>
                <div className='left_img'>
                  <img src="../Images/1.jpg" alt="1" />
                </div>
              </div>
              <div className='col'>
                <p>To expand my knowledge and
                  skills by working in the entry level position and contribute to the core for the overall growth of the organization.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    export default Header