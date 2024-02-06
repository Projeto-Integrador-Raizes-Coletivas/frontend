import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./Carrossel.css"

function Carrossel() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            <SwiperSlide>
                <img className="swiper-slide-img"
                    src='https://ik.imagekit.io/raizescoletivas/banner-carrossel-slide-4.jpg?updatedAt=1707239955169'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img className="swiper-slide-img"
                    src='https://ik.imagekit.io/raizescoletivas/banner-carrossel-slide-2.jpg?updatedAt=1707238249540'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img className="swiper-slide-img"
                    src='https://ik.imagekit.io/raizescoletivas/banner-carrossel-slide-1.jpg?updatedAt=1707238208558'
                />
            </SwiperSlide>

        </Swiper>
    )
}

export default Carrossel
