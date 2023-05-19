import React from 'react'
import Second from '../Assets/Second.png'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const Main = () => {
  return (
    <div className='max-w[800px] w-full h-[200vh] bg-[#2F40AD] mx-auto'>
      <div className='w-[100%] h-[100%] flex flex-col justify-center items-center relative'>
        <div className='wrapperUpper w-[100%] flex justify-center mb-6'>
          <div className='inputWrapper w-[100%] flex items-center justify-center relative'>
            <input className='h-[50px] w-[550px] bg-blue-900 rounded-[30px] backdrop-blur  placeholder:pl-6' type='email' placeholder='Enter your E-mail address'></input>
            <button className='inputButton h-[50px] w-[200px] rounded-[30px] bg-white absolute ml-[350px] text-[20px] flex flex-row justify-center items-center'>Get Started <HiOutlineArrowNarrowRight className='ml-2 animate-forward' /></button>
          </div>
        </div>

        <div className='wrapperLower w-[100%] flex justify-center items-center'>
        <div className='frameTag h-[40px] w-[200px] z-30 mb-[400px] mr-[700px] rounded-[35px] bg-[rgba(225,225,225,0.3)] backdrop-blur border-[2px] border-[rgba(222,222,222,0.3)] absolute items-center flex justify-center text-white'>Make Your Selection</div>
        <div className='frameMain h-[590px] w-[590px] bg-[rgba(225,225,225,0.3)] border-[2px] border-[rgba(222,222,222,0.3)] rounded-[2%] backdrop-blur flex justify-center items-center'>
          <img className='h-[563px] W-[570px]' src={Second} alt='/'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Main
