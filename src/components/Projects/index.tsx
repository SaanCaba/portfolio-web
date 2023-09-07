import React, { useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import './projects.css'
import { dataProjects } from '../../data/data'
import ProjectItem from '../ProjectItem'
import { useTranslation } from 'react-i18next'

function Projects() {
  const [t] = useTranslation('global')

  return (
    <div id='projects' className='contProjects'>
      <h1 className='heading'>{t('titles.projects')}</h1>
      <section className='sectionSlider'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swipper-button-next',
            prevEl: '.swipper-button-prev'
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper-container'
        >
          {dataProjects.map((el, i) => {
            return (
              <SwiperSlide className='swiper-slide' key={i}>
                <ProjectItem project={el} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </div>
  )
}

export default Projects
