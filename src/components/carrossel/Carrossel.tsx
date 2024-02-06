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
                    src='https://img.freepik.com/fotos-premium/jardim-verde-ecologicamente-consciente-compostagem-sustentavel-para-reduzir-o-desperdicio-fomentando-ecologicamente-correto_210545-4398.jpg?w=1380'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img className="swiper-slide-img"
                    src='https://img.freepik.com/fotos-premium/uma-variedade-de-frutas-sao-dispostas-em-um-circulo_808092-1937.jpg?w=1380'
                />
            </SwiperSlide>

            <SwiperSlide>
                <img className="swiper-slide-img"
                    src='https://img.freepik.com/fotos-gratis/colagem-colorida-de-textura-de-frutas-de-perto_23-2149870264.jpg?w=1380&t=st=1707175590~exp=1707176190~hmac=6d65556e13375ac0c4ddc67e39b034ea3795a59e56c8596431198af527a47b66'
                />
            </SwiperSlide>

        </Swiper>
    )
}

export default Carrossel
