import React from 'react'
import { Autoplay, EffectCoverflow,  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { DiApple } from 'react-icons/di';

function Homeswiper() {
    const HomeSwiperData = [
        {
            img:"https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/a4/a3/42/a4a342e1-e6c7-a5f8-d00b-c6b3233c63c5/2a1cfbdb-d377-4f3c-b68b-66370386ad7b.png/274x593.jpg",
            logo:<><DiApple/>tv+</>,
            text:<>Friday Night <br /> Baseball</>,
            janre:"",
            description:"Live MLB games, every Friday.",
            button:"See the schedule",
        },

        {
            img:"https://is1-ssl.mzstatic.com/image/thumb/Features/v4/86/4a/f2/864af2c0-8668-eb2b-62f8-42c649aad697/7cbd8806-e701-4183-84e7-f7c2c61f9b08.png/548x1186.jpg",
            logo:<><DiApple/>tv+</>,
            text:<>PRESUMED <br /> INNOCENT </>,
            janre:"Crime",
            description:"Presume nothing.",
            button:"Stream now",
        },
        {
            img:"https://is1-ssl.mzstatic.com/image/thumb/Features/v4/3e/78/bc/3e78bcc2-0ac3-80f9-9cb1-d7bfef7d1d42/91e53220-f3f9-4bda-ba20-a1d517d13e34.png/548x1186.jpg",
            logo:<><DiApple/>tv+</>,
            text:<>DARK <br /> MATTER</>,
            janre:"Sci-Fi",
            description:"One life. infinite possibilities.",
            button:"Stream now",
        },
        {
            img:"https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/ce/d7/f8/ced7f86a-adfb-af40-cd77-9415948d4b5a/11690010-323a-4f8b-8d3d-951f4084808c.png/548x1186.jpg",
            logo:<><DiApple/>tv+</>,
            text:<>LOOT</>,
            janre:"Comedy",
            description:"Getting it together.",
            button:"Stream now",
        },
        {
            img:"https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/1f/5e/59/1f5e5950-2083-81d1-1622-37942f407dfe/d3b28536-f80e-4943-9f56-7fb3924d9896.png/548x1186.jpg",
            logo:<><DiApple/>tv+</>,
            text:<>TRYING</>,
            janre:"Comedy",
            description:"New season.",
            button:"Stream now",
        },
        {
            img:"https://is1-ssl.mzstatic.com/image/thumb/Features/v4/d7/b7/20/d7b720c9-36fd-f302-4bc3-30f6aa6dc572/e9a131d1-54b9-402d-91ee-ebdff981a711.png/548x1186.jpg",
            logo:<><DiApple/>tv+</>,
            text:<>CAMP <br /> SNOOPY</>,
            janre:"Animation",
            description:"Happiness is the great outdoors.",
            button:"Stream now",
        },
        {
            img:"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b3/fa/77/b3fa7718-b692-ca56-87ce-5af818a447f7/955d54ab-6986-4e68-981d-b11df46a0029.png/548x1186.jpg",
            logo:<><DiApple/>tv+</>,
            text:<>TED LASSO</>,
            janre:"Comedy",
            description:"Kindness makes a comeback",
            button:"Stream now",
        },

    ];

  return (
    <div>
        <Swiper
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={20}
              pagination={{
            clickable: true,
          }}
          modules={[Pagination, EffectCoverflow, Autoplay,]}
          className="mySwiper"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
             {HomeSwiperData.map((item, index)=>(
                <SwiperSlide
                    key={index}
                    style={{backgroundImage: `url(${item.img})`}}
                    className=' bg-cover w-[100%]  h-[400px] text-center p-8 flex flex-col justify-between text-white  xl:h-[700px] xl:text-3xl  lg:h-[700px] lg:text-3xl'
                >
                    <div className=' font-semibold flex flex-col w-[100%] items-center'>
                        <h1 className='flex items-center text-md '>{item.logo}</h1>
                        <h6 className='text-sm'>{item.text}</h6>
                    </div>
                    <div className='text-sm leading-5 xl:leading-6 lg:leading-6'>
                        <h6>{item.janre}</h6>
                        <h2>{item.description}</h2>
                        <button className='xl:w-[50%] xl:p-1 xl:leading-6 lg:w-[50%] lg:p-1 lg:leading-6 w-[100%] text-black text-[10px]  bg-white  rounded-[20px] '>{item.button}</button>
                    </div>

                </SwiperSlide>
             ))}
        </Swiper>
    </div>
  )
}

export default Homeswiper