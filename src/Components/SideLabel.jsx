import React, { useEffect } from "react";

const SideLabel = () => {

    useEffect (() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 50){
                document.getElementById('sideLabel').style.left = '-60px'
            }else{
                document.getElementById('sideLabel').style.left = '-120px'
            }
        })
      }, []);
    


    



  return (
    <div id="sideLabel" className="container transition-all mt-[550px] left-[-120px] flex items-center justify-start w-[100%] h-[150px] fixed z-50">
      <div className="sideLabel rotate-90 flex flex-row justify-center items-center w-[150px] h-[35px] bg-gray-100">
        created by<span className="ml-1 mb-1 text-2xl font-logoMain text-red-600">ME</span>
      </div>
    </div>
  );
};

export default SideLabel;
