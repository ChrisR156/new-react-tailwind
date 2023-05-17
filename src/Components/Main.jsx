import React from 'react'
import Second from '../Assets/Second.png'
const Main = () => {
  return (
    <div className='max-w[800px] w-full h-[200vh] bg-[#2F40AD] mx-auto'>
      <div className='w-[100%] h-[100%] flex justify-center items-center relative'>
        <div className='fraimTag h-[40px] w-[200px] z-30 mb-[400px] mr-[700px] rounded-[35px] bg-[rgba(225,225,225,0.3)] backdrop-blur border-[2px] border-[rgba(222,222,222,0.3)] absolute items-center flex justify-center text-white'>Make Your Selection</div>
        <div className='frameMain h-[590px] w-[590px] bg-[rgba(225,225,225,0.3)] border-[2px] border-[rgba(222,222,222,0.3)] rounded-[2%] backdrop-blur flex justify-center items-center'>
          <img className='h-[563px] W-[570px]' src={Second} alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default Main
