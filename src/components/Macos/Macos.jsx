import React from 'react'

function Macos() {
  return (
    <div className='xl:h-[90vh] lg:h-[90vh] xl:bg-center text-black font-semibold flex flex-col text-center leading-10 items-center justify-start pt-10 w-[100%] h-[70vh] bg-top  lg:bg-center bg-cover bg-[url("https://www.apple.com/v/home/bo/images/heroes/macbook-air-m3/hero_macbook_air_m3__cp4t7pn8zqaa_small.jpg")]' >
      <h1 className='text-4xl'>
        MacBook Air
      </h1>
      <h4>
        Lean. Mean. M3 machine.
      </h4>
      <div className='flex w-[100%] justify-center gap-4'>
        <button className=' text-white bg-blue-500 w-[20%] xl:w-[10%] lg:w-[10%] text-[12px] rounded-[20px]'>Learn more</button>
        <button className=' text-blue-500 w-[20%] xl:w-[10%] lg:w-[10%] xl:p-0 text-[12px] border border-blue-500 rounded-[20px]' >Buy</button>
      </div>
    </div>
  )
}

export default Macos