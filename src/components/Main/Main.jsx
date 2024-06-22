import React from 'react'

function Main() {
  return (
    <div className='text-white font-semibold flex flex-col text-center leading-10 items-center justify-end pb-10 w-[100%] h-[70vh] bg-top bg-cover bg-[url("https://www.apple.com/v/home/bo/images/heroes/college-students/hero_college_students__ehs15uctsryq_medium_2x.jpg")]' >
      <h1 className='text-4xl'>
        College Students
      </h1>
      <h4>
        Mac and iPad. Go further.
      </h4>
      <button className='p-2 bg-blue-500 w-[30%] xl:w-[10%] lg:w-[10%] text-sm rounded-[20px]'>Learn more</button>
    </div>
  )
}

export default Main