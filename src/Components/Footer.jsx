import React from 'react'
import { FaFacebookSquare, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className='font-mont bg-gray-50'>
      <footer className="footer sm:footer-horizontal bg-neutral mt-5 text-neutral-content p-10">
  <nav>
    <h1 className='font-grif text-4xl uppercase text-yellow-400'>Dramatic</h1>
    <p className='text-gray-300'>Enjoy Your Movie Time</p>
  </nav>
  <nav>
    <h6 className="footer-title">Navigation</h6>
    <p>Home</p>
    <p>Tv Show</p>
    <p>Movies</p>
    <p>New</p>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <p>Privacy Policy</p>
    <p>Terms of services</p>
    <p>Cookie Performance</p>
    <p >Corporate Information</p>
  </nav>
  <nav>
    <h6 className="footer-title">Talk To Us</h6>
    <p >shahriarsopnilraj@gmail.com</p>
    <p >+8801318989245</p>
  </nav>
  <nav>
    <p className='footer-title'>Follow Us</p>
    <div className='text-2xl flex gap-4 text-g' >
        <FaFacebookSquare />
    <FaWhatsapp/>
    <FaTelegramPlane />
    </div>

  </nav>
</footer>
    </div>
  )
}

export default Footer
