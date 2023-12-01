// import React, { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { hasMoreItems } from '../hooks/HasMore.hook';
// const Prueba = () => {
//   const [products, setProducts] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);

//   // Supongamos que tienes la lista de productos inicial en la constante products
//   const initialProducts = [
//     { id: 1, name: 'White traditional long dress', image: '1.jpg', price: 3400 },
//     { id: 2, name: 'Long sleave denins jacket', image: '2.jpg', price: 3400 },
//     { id: 3, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 4, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 5, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 6, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 7, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 8, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 9, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 10, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 11, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
//     { id: 12, name: 'Athenis skirt', image: '12.jpg', price: 34000 },
//     { id: 13, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 14, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 15, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 16, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 17, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 18, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 19, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 20, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 21, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
//     { id: 22, name: 'Athenis skirt', image: '12.jpg', price: 34000 },
//     { id: 23, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 24, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 25, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 26, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 27, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 28, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 29, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 30, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 31, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
//     { id: 32, name: 'Athenis skirt', image: '12.jpg', price: 34000 },
//     { id: 33, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 34, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 35, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 36, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 37, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 38, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 39, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 40, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 41, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
//     { id: 42, name: 'Athenis skirt', image: '12.jpg', price: 34000 },
//     { id: 43, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 44, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 45, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 46, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 47, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 48, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 49, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 50, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 51, name: 'White traditional long dress', image: '1.jpg', price: 3400 },
//     { id: 52, name: 'Long sleave denins jacket', image: '2.jpg', price: 3400 },
//     { id: 53, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 54, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 55, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 56, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 57, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 58, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 59, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 60, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 61, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
//     { id: 62, name: 'Athenis skirt', image: '12.jpg', price: 34000 },
//     { id: 63, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 64, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 65, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 66, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 67, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 68, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 69, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 70, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 71, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
//     { id: 72, name: 'Athenis skirt', image: '12.jpg', price: 34000 },
//     { id: 73, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 74, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 75, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 76, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 77, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 78, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 79, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 80, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 81, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
//     { id: 82, name: 'Athenis skirt', image: '12.jpg', price: 34000 },
//     { id: 83, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 84, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 85, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 86, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 87, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 88, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 89, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 90, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//     { id: 91, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
//     { id: 92, name: 'Athenis skirt', image: '12.jpg', price: 34000 },
//     { id: 93, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
//     { id: 94, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
//     { id: 95, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
//     { id: 96, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
//     { id: 97, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
//     { id: 98, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
//     { id: 99, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
//     { id: 100, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
//   ];

//   useEffect(() => {
//     // Cargar los primeros 10 productos iniciales
//     setProducts(initialProducts.slice(0, 10));
//   }, []);

// //   HasMore(10, page, )
//   const loadMoreProducts = () => {
//     // Simula la carga de más productos
//     const startIndex = page * 10;
//     const endIndex = startIndex + 10;
//     const newProducts = initialProducts.slice(startIndex, endIndex);

//     // Agrega los nuevos productos al estado de productos
//     setProducts([...products, ...newProducts]);

//     // Aumenta el número de página
//     setPage(page + 1);

//     // Detiene la carga después de que se hayan mostrado todos los productos
//     if (endIndex >= initialProducts.length) {
//       setHasMore(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Lista de Productos con Scroll Infinito</h1>
//       <InfiniteScroll
//         dataLength={products.length}
//         next={loadMoreProducts}
//         hasMore={hasMore}
//         loader={<h4>Cargando...</h4>}
//       >
//         <ul className='col-md-12 row'>
//           {products.map((product) => (
//             <li key={product.id} className='w-25 h-25 col-md-3'>
//               <img src={ `/media/images/tests/${product.id}.png` } alt={product.name} className='img-fluid' />
//               <h3>{product.name}</h3>
//               <p>Precio: ${product.price}</p>
//             </li>
//           ))}
//         </ul>
//       </InfiniteScroll>
//     </div>
//   );
// };









// // export default Prueba;
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// // import './styles.css';

// // import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// const Prueba = ()=> {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className='col-md-4'>
//       <Swiper
//         style={{
//           '--swiper-navigation-color': 'rgba(255, 0, 0, 0.82)',
//           '--swiper-pagination-color': 'rgba(255, 0, 0, 0.82)',
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src="/media/images/products/1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/9.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/10.jpg" />
//         </SwiperSlide>
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="/media/images/products/1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/9.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/media/images/products/10.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
// export default Prueba




import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Prueba = ({ min, max }) => {
  const [range, setRange] = useState([0, 100]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
    // onRangeChange(newRange);
  };

  return (
    <div>
      <Slider
        range
        min={min}
        max={max}
        step={10}

        pushable={ true }
        ariaLabelForHandle={["s","sda"]}
        dots={true}
        value={range}
        onChange={handleRangeChange}
      />
      <div>
        <span>{`Min: ${range[0]}`}</span>
        <span>{`Max: ${range[1]}`}</span>
      </div>
    </div>
  );
};

export default Prueba;
