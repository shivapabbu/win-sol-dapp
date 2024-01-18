import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'
const Footer = () => {
  return (
    <div className='bg]  flex justify-between items-center py-4 px-5'>
      <p className='text-gray-300 font-bold' style={{fontFamily:"'Roboto', sans-serif, Konga,Arial Black"}}>Copyright &copy; Shiva Pabbu , 2024. All rights reserved.</p>
      <div className='text-gray-300 flex space-x-6'>
        <a href="https://github.com/shivapabbu" target="_blank" rel="noopener noreferrer">
          <BsGithub size="25px"/>
        </a>
      </div>
    </div>
    
  )
}

export default Footer
