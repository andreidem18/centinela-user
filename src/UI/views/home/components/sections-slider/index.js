import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import './styles.scss';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay])

export const SectionsSlider = () => {
    return (
        <div className='sections-slider'>
            <Swiper
                id="main" 
                spaceBetween={10}
                slidesPerView={2}
                centeredSlides
                loop
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide key={`slide-${1}`}>
                    <Link className="section-card" to='/vehiculos' style={{background: '#E84A5F'}}>
                        <span>Vehículos</span>
                        <i className="icon-car" style={{bottom: '-15px'}}></i>
                    </Link>
                </SwiperSlide>
                <SwiperSlide key={`slide-${2}`}>
                    <Link className="section-card" to='/encuestas' style={{background: '#8BC34A'}}>
                        <span>Encuestas</span>
                        <i className="icon-survey" style={{fontSize: '55px'}}></i>
                    </Link>
                </SwiperSlide>
                <SwiperSlide key={`slide-${3}`}>
                    <Link className="section-card" to='/comunicados' style={{background: '#48D0B0'}}>
                        <span>Comunicados</span>
                        <i className="icon-megaphone" style={{fontSize: '55px'}}></i>
                    </Link>
                </SwiperSlide>
                <SwiperSlide key={`slide-${4}`}>
                    <Link className="section-card" to='/pagos' style={{background: '#E84A5F'}}>
                        <span>Pagos</span>
                        <i className="icon-payments"></i>
                    </Link>
                </SwiperSlide>
                <SwiperSlide key={`slide-${5}`}>
                    <Link className="section-card" to='/visitas' style={{background: '#8BC34A'}}>
                        <span>Visitas</span>
                        <i className="icon-group" style={{fontSize: '70px'}}></i>
                    </Link>
                </SwiperSlide>
                <SwiperSlide key={`slide-${6}`}>
                    <Link className="section-card" to='/eventos' style={{background: '#48D0B0'}}>
                        <span>Eventos</span>
                        <i className="icon-calendar" ></i>
                    </Link>
                </SwiperSlide>
                <SwiperSlide key={`slide-${7}`}>
                    <Link className="section-card" to='/incidentes' style={{background: '#8BC34A'}}>
                        <span>Incidentes</span>
                        <i className="icon-exclamation-message" style={{fontSize: '50px'}}></i>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};


