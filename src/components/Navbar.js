import React from 'react'
import '../style/Navbar.css'

function Navbar() {
    const search = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.825 21.65-6.35-6.35q-.75.575-1.837.912-1.088.338-2.213.338-2.975 0-5.037-2.062-2.063-2.063-2.063-5.038t2.063-5.038Q6.45 2.35 9.425 2.35t5.038 2.062q2.062 2.063 2.062 5.038 0 1.125-.312 2.15-.313 1.025-.913 1.825l6.375 6.375Zm-10.4-7.75q1.875 0 3.163-1.288 1.287-1.287 1.287-3.162t-1.287-3.163Q11.3 5 9.425 5 7.55 5 6.263 6.287 4.975 7.575 4.975 9.45q0 1.875 1.288 3.162Q7.55 13.9 9.425 13.9Z"/></svg>
    
  return (
    <div className='nav'>
              <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg" alt="" />
              </div>
                <a href="/store">Store</a>
                <a href="/phone">Phone</a>
                <a href="/tv_&_smartHome"> Tv & Smart Home</a>
                <a href="/laptop_&_tablet"> Laptop & Tablet</a>
                <a href="/life_style">LifeStyle</a>
              
    </div>
  )
}

export default Navbar