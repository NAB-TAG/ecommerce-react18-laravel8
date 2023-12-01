import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay, EffectFlip  } from 'swiper/modules';

const SwiperSliders = ({file_path, images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=''>
      <Swiper
        style={{
          '--swiper-navigation-color': 'rgba(255, 0, 0, 0.7058823529)',
          '--swiper-pagination-color': 'rgba(255, 0, 0, 0.7058823529)',
        }}
        loop={false}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFlip  ]}
        effect={'flip'}
        autoplay={{delay: 7000}}
        className="mySwiper2"
      >
        {images.map((image) => {
            console.log(image)
        })}
        { images.map((image, index) => (
            <SwiperSlide key={ index }>
                <div className='w-100'>
                    <img src={ `/media/images/products/${file_path}/${image}` } className='w-100 h-100 object-fit-contain' />
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        { images.map((image, index) => (

            <SwiperSlide key={ index } className='swiper-slider'>
                <div style={{width: '100%'}}>
                    <img src={ `/media/images/products/${file_path}/${image}` } className='w-100 h-100 object-fit-contain' />
                </div>
            </SwiperSlide>
        )
        )}
      </Swiper>
    </div>
  );
}

export default SwiperSliders;
