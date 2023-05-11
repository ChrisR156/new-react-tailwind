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
    <div className='w-[100%] fixed'>
    <div id='firstDiv' className=' bg-white h-[80px] flex flex-row px-12 transition-all'>
      <h1 id='react' className='LogoMain h-[100%] w-[10%] text-[40px] font-logoMain flex justify-center items-center transition-all text-red-600'>React.</h1>
      <p className='ContentHeader ml-[30px] h-[100%] w-[50%] flex flex-row '>
        <ul className='md:flex hidden  flex-row items-center'>
          <li className='flex flex-row items-center'>Creation <IoIosArrowDown className='ml-2'/></li>
          <li className='flex flex-row items-center mx-8'>Business <IoIosArrowDown className='ml-2'/></li>
          <li className='flex flex-row items-center'>Growth <IoIosArrowDown className='ml-2'/></li>
          <li className='flex flex-row items-center mx-8'>Resources <IoIosArrowDown className='ml-2'/></li>
          <li className='flex flex-row items-center'>Enterprise <IoIosArrowDown className='ml-2'/></li>
          <li className='text-[30px] mx-8 text-gray-300'>|</li>
          <li className='mr-10'>Pricing</li>
          <li className=''>Support</li>
          <ul className='flex flex-row ml-[20%] justify-center items-center'>
          <li><TfiWorld size={18}/></li>
          <li className='mx-2 text-[30px] text-gray-300'>|</li>
          <li className='w-[50px] mr-8 text-center underline text-blue-300'>Log In</li>
          <button id='button' className='transition-all h-[42px] w-[150px] bg-blue-600 text-white rounded-[30px]'>Get Started</button>
          </ul>
        </ul>
      
      </p>
      
    </div>
    </div>
  )
}

export default Navbar
