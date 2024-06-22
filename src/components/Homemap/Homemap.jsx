import React from 'react'
import { DiApple } from "react-icons/di";

function Homemap() {
    const HomeData = [
        {
            img: "https://www.apple.com/v/home/bo/images/promos/ipad-air/promo_ipadair__cu1bnxi7uuwm_small_2x.jpg",
            text:"iPad air",
            description:"Two sizes. Faster chip. Does it all",
            button:"Learn More",
            buy:"Buy",
        },
        {
            img:"https://www.apple.com/v/home/bo/images/promos/macbook-pro-14-and-16/promo_mbp__ek7p477bkp6q_small.jpg",
            text:"MacBook Pro",
            description:"Mind-blowing. Head-turning.",
            button:"Learn More",
            buy:"Buy",
        },
        {
            img:"https://www.apple.com/v/home/bo/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small_2x.jpg",
            text:"iPad Pro",
            description:"Unbelievably thin. Incredibly powerful.",
            button:"Learn More",
            buy:"Buy",
            color:"white"
        },
        {
            img:"https://www.apple.com/v/home/bo/images/promos/iphone-15-pro/promo_iphone15pro__e48p7n5x3nsm_small_2x.jpg",
            text:"iPhone 15 Pro",
            description:"Titanium. So strong. So light. So Pro.",
            button:"Learn More",
            buy:"Buy",
            color:"white"
        },
        {
          img: "https://www.apple.com/v/home/bo/images/promos/apple-card/promo_apple_card__5cm7draujpey_small_2x.jpg",
          text: <>{<DiApple />} Card</>,
          description: "Get up to 3% Daily Cash back with every purchase.",
          button: "Learn More",
          buy: "Buy",
        },
        {
            img:"https://www.apple.com/v/home/bo/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small.jpg",
            text:<>{<DiApple/>} Trade In</>,
            description:"Get $170-$630 in credit when you trade in iPhone 11 or higher",
            button:"Learn More",
            buy:"Buy",
        },
    ];
  return (
    <div className=' flex flex-col gap-2'>
        { HomeData.map((item, index)=>(
         <div key={index} style={{ backgroundImage: `url(${item.img})`}} className={`text-black bg-center bg-cover  font-semibold flex flex-col text-center leading-10 items-center justify-start pt-10 w-[100%] h-[70vh]  xl:bg-center lg:bg-center `} >
         <h1 style={{color: `${item.color}`}} className='text-4xl flex'>
           {item.text}
         </h1>
         <h4 style={{color: `${item.color}`}} >
           {item.description}
         </h4>
         <div className='flex w-[100%] justify-center gap-4'>
           <button className=' text-white bg-blue-500 w-[20%] xl:w-[10%] lg:w-[10%] text-[12px] rounded-[20px]'>{item.button}</button>
           <button className=' text-blue-500 w-[20%] xl:w-[10%] lg:w-[10%] xl:p-0 text-[12px] border border-blue-500 rounded-[20px]' >{item.buy}</button>
         </div>
       </div>
        ))};
    </div>
  )
}

export default Homemap