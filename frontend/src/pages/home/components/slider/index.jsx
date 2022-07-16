import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";
import { Pagination, Navigation } from "swiper";

import orphan from "./assets/images/1.jpeg";
import khums from "./assets/images/2.jpg";
import zari from "./assets/images/3.jpg";
import sadaqah from "./assets/images/4.jpg";


const HomeSlider = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className='image-container'>

                        <img src={orphan} alt="" />
                        <div className="text-block">
                            <h4>The orphan sponsorship program is one of the most important programs run by the foundation</h4>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className='image-container'>

                        <img src={khums} alt="" />

                        <div className="text-block">
                            <h4>Fulfill your Khums obligation with ease</h4>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className='image-container'>

                        <img src={zari} alt="" />

                        <div className="text-block">
                            <h4>Register now for Ziyarah of Imam Hussein (as) on Thursday night</h4>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className='image-container'>

                        <img src={sadaqah} alt="" />

                        <div className="text-block">
                            <h4>Sadaqah every day on your behalf at your sunrise and your sunset!</h4>
                        </div>

                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default HomeSlider;