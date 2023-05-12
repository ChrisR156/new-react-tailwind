import React, { useEffect } from 'react'
import {IoIosArrowDown} from "react-icons/io"
import {TfiWorld} from 'react-icons/tfi'

const Navbar = () => {

  useEffect (() => {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 50){
        document.getElementById('firstDiv').style.height = "40px"
        document.getElementById("react").style.fontSize = '35px'
        document.getElementById("react").style.color = 'black'
        document.getElementById('button').style.width = '120px'
        document.getElementById('button').style.height = '32px'
      } else{
        document.getElementById('firstDiv').style.height = "80px"
        document.getElementById("react").style.fontSize = '40px'
        document.getElementById("react").style.color = 'red'
        document.getElementById('button').style.width = '150px'
        document.getElementById('button').style.height = '42px'
      }
    })
  }, [])


  return (
    <div className='w-[100%] fixed z-50'>
    <div id='firstDiv' className='[w-100%] bg-white h-[80px] flex flex-row px-6 transition-all'>
      <div id='react' className='title  h-[100%] w-[15%] justify-center flex items-center font-logoMain text-[50px] text-red-600'>React.</div>
      <div className='resources  h-[100%] w-[50%] flex items-center '>
        <ul className='flex flex-row '>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex flex-row items-center'>Creation <IoIosArrowDown className='ml-1'/></li>
        <li className='p-2 flex items-center text-[30px]'>|</li>
        <li className='p-2 xl:flex hidden flex-row items-center'>Creation</li>
        <li className='p-2 xl:flex hidden flex-row items-center'>Creation</li>
        <li className='p-2 xl:hidden flex flex-row items-center text-blue-500'>More <IoIosArrowDown className='ml-1'/></li>

        </ul>
      </div>
      <div className='w-[35%] flex flex-row justify-end items-center'>
        <div className='p-4 '><TfiWorld size={20} className='text-green-600'/></div>
        <div className='p-1 flex items-center text-[30px]'>|</div>
        <div className='p-4 '>Log In</div>
        <button id='button' className='p-4 h-[40px] text-white flex items-center justify-center rounded-3xl w-[150px] bg-blue-500'>Get Started</button>
      </div>
      
    </div>
    </div>
  )
}

export default Navbar
