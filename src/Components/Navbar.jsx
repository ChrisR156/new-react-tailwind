import React, { useEffect, useState } from 'react'
import {IoIosArrowDown} from "react-icons/io"
import {TfiWorld} from 'react-icons/tfi'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [navClick, setnavClick] = useState(false)

  const handleNavClick = ()=>{
    setnavClick(!navClick)
  }

  useEffect (() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 50){
        document.getElementById('firstDiv').style.height = "40px"
        document.getElementById("react").style.fontSize = '35px'
        document.getElementById("react").style.color = 'black'
        document.getElementById('button').style.width = '120px'
        document.getElementById('button').style.height = '32px'
        document.getElementById('lineOne').style.fontSize = '30px'
        document.getElementById('lineTwo').style.fontSize = '30px'
        
      } else{
        document.getElementById('firstDiv').style.height = "80px"
        document.getElementById("react").style.fontSize = '40px'
        document.getElementById("react").style.color = 'red'
        document.getElementById('button').style.width = '150px'
        document.getElementById('button').style.height = '42px'
        document.getElementById('lineOne').style.fontSize = '40px'
        document.getElementById('lineTwo').style.fontSize = '40px'
        
      }
    })
  }, [])


  return (
    <div className='w-[100%] h-[80px] fixed z-50'>
    <div id='firstDiv' className='[w-100%] bg-white h-[80px] justify-between flex flex-row px-6 transition-all'>
      <div id='react' className='title  h-[100%] w-[15%] justify-center flex items-center font-logoMain text-[50px] text-red-600'>React.</div>
      <div className='resources hidden lg:flex  h-[100%] w-[50%] items-center '>
        <ul className='flex flex-row '>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li id='lineOne' className='p-2 flex items-center text-[40px] text-gray-200'>|</li>
        <li className='p-2 xl:flex hidden flex-row items-center'>Creation</li>
        <li className='p-2 xl:flex hidden flex-row items-center'>Creation</li>
        <li className='p-2 xl:hidden flex flex-row items-center text-blue-500'>More <IoIosArrowDown className='ml-1'/></li>

        </ul>
      </div>
      <div className='w-[35%] hidden lg:flex flex-row justify-end items-center'>
        <div className='p-4 '><TfiWorld size={20} className='text-blue-600'/></div>
        <div id='lineTwo' className='p-1 flex items-center text-[40px] text-gray-200'>|</div>
        <div className='p-4 '>Log In</div>
        <button id='button' className='p-4 h-[40px] text-white hover:text-black flex items-center justify-center rounded-3xl w-[150px] bg-blue-500 hover:bg-blue-400 transition duration-300'>Get Started</button>
      </div>
      
      <div onClick={handleNavClick} className='flex items-center justify-center lg:hidden'>{
          !navClick ? (<AiOutlineMenu size={30} />) : (<AiOutlineClose size={30}/>)
        }</div>
        
    </div>
       
          <div className={!navClick ? 'w-[100%] h-[500px] top-[-100%] hidden left-0  transition duration-200 lg:hidden ease-in-out' : 'lg:hidden ease-in-out h-[500px] top-0 left-0 w-[100%] bg-white transition duration-200 '}>

          
       </div>
    </div>
  )
}

export default Navbar
