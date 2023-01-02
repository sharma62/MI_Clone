import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Pagination , FreeMode, Navigation} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import '../style/swiper.css';

const Slider = () => {
   
 
  return (
    <>
      <div className="container-fluid">
  
      <Swiper
        freeMode ={[FreeMode]}
         draggable={false}
        spaceBetween={30}

        modules={[Pagination,Navigation]}
         pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i03.appmifile.com/91_operator_in/18/12/2022/9ae3de365b5c8ca739222bfac05009cb.jpg?f=webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i03.appmifile.com/819_operator_in/20/12/2022/91e8479eb9378c3fd7c2053557f7961d.jpg?f=webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i03.appmifile.com/560_operator_in/19/12/2022/6efc9784ee2405b0a3557b1318509a4d.jpg?f=webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i03.appmifile.com/92_operator_in/19/12/2022/aa168b44dc10799e5cab2892eceaf2dc.jpg?f=webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i03.appmifile.com/628_operator_in/18/12/2022/04f41fdbf86395aa91da3dfae4326b51.jpg?f=webp" alt="" /></SwiperSlide>
      </Swiper>
 
      </div>

    </>
  )
}

export default Slider
