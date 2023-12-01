import { useLocation } from 'react-router-dom';
import '../../css/products/productDetail.css'
import '../../css/products/products.css'

import { useEffect, useState } from 'react';
import HeaderProduct from '../components/Products/header/HeaderProduct';
import ListProducts from '../components/Products/body/ListProducts';
import { GetFetch } from '../hooks/Fetch.hook';
import SwiperSliders from '../helpers/Sliders/SwiperSlider.class';
import ProductDetailSkeleton from '../components/Skeletons/ProductDetailSkeleton/ProductDetailSkeleton';


const ProductDetail = () => {
    const [ quantity, setQuantity] = useState(1);
    const [ id, setId ] = useState(window.location.pathname.split("/").pop());
    const [ product, setProduct ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ colors, setColors ] = useState([]);
    const [ sizes, setSizes ] = useState([]);
    const [ checkedColors, setCheckedColors ] = useState({});

    // funcion para incrementar la cantidad de productos
    const quantityIncrement = (e, limit) => {
        e.preventDefault()
        if (quantity >= limit) {
            return setQuantity(limit);
        }
        setQuantity( quantity + 1 )
    }
    // funcion para decrementar la cantidad de productos
    const quantityDecrement = (e) => {
        e.preventDefault()
        if(quantity == 1){
            return setQuantity(1)
        }
        setQuantity( quantity - 1 )
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                const getProducts = await GetFetch('/api/product/'+id, {'Content-Type': 'application/json'});
                setColors(JSON.parse(getProducts.colors));
                setSizes(JSON.parse(getProducts.sizes));
                setProduct(getProducts);
                setLoading(false);
                // setLinks(getProducts.links);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])
    return(
        <div className="container">
            { loading ?
            <ProductDetailSkeleton />
            :
            <div className="product-detail row">

                <div className=" product-detail__media p-2 col-md-4">
                    <SwiperSliders file_path={product.file_path} images={JSON.parse(product.image)}/>
                </div>
                <div className="product-detail__content p-2 col-md-8">
                    <div className="product-detail__content--title">
                        <h2>{ product.name }</h2>
                        <div className="d-flex align-items-center">
                            <span>20/10/2022</span>

                            <div className="in-stock d-flex align-items-center">
                                <span>En stock</span>
                            </div>
                            <i className="fa-solid fa-star ">4.2</i>
                        </div>
                        <p className='mt-2'>Vendedor: <a href="#">Administrador</a></p>
                    </div>
                    <div className="product-detail__content--price">
                        <h3 className='price'>${ product.price }</h3>
                        <h5 className='oldprice'>${ Math.ceil(product.price+(product.discount / 100 )* product.price) }</h5>
                    </div>

                    <form action="" className='product-detail__content--options'>

                        <div className="product-detail__colors">
                            <h4 className='me-2'>Color:</h4>

                            <div>
                                { colors.map((color, index) => {
                                    return (
                                        <div className="product-detail__colors--color" key={ index }>
                                            <input type="radio" name='color' id={ color } className='color' onChange={() => setCheckedColors({[color]: !checkedColors[color]})}/>
                                            <label
                                                htmlFor={ color }
                                                className="circle"
                                                title={ color }
                                                style={{
                                                    backgroundColor: color,
                                                    border: checkedColors[color] ? `4px solid ${color}` : 'none'
                                                }}></label>
                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                        <div className="product-detail__sizes mt-3">
                            <div className="product-detail__sizes--numerics">
                                <h4 className='me-2'>Talla:</h4>
                                <div>

                                { sizes.map((size, index) => {
                                    return (
                                        <div className="product-detail__sizes--numeric" key={ index }>
                                            <input type="radio" name='size' id={ size } className='size'/>
                                            <label
                                                htmlFor={ size }
                                                className="circle"
                                                title={ size }
                                                style={{
                                                    backgroundColor: size,
                                                }}>{ size }</label>
                                        </div>
                                    );
                                })}

                                </div>

                            </div>
                            <div className="product-detail__sizes--alphabetical"></div>
                        </div>

                        <div className="product-detail__more">
                            <div className='d-flex'>
                                <div className="product-detail__more--quantity">
                                    <button onClick={ (e) => quantityDecrement(e) }><i className="fa-solid fa-minus"></i></button>
                                        <input type="text" value={ quantity } onChange={() => {}}/>
                                    <button onClick={ (e) => quantityIncrement(e, product.stock) }><i className="fa-solid fa-plus"></i></button>
                                </div>

                                <button className="product-detail__more--buy">Comprar</button>
                            </div>
                            <div className="product-detail__more--actions">
                                <button className="btn"><i className="fas fa-heart"></i> Agregar a favoritos</button>
                                <button className="btn"><i className="fas fa-share"></i> Compartir</button>
                                <button className="btn"><i className="fas fa-shopping-cart"></i> Agregar al carrito</button>

                            </div>
                        </div>

                    </form>

                    <div className="product-detail__content--description">
                        <h4>Descripcion</h4>
                        <p>
                            { product.description }
                        </p>
                    </div>


                </div>
            </div>
            }


            {/* <div className="products">
                <HeaderProduct title="Puede que te guste" className="products__header"/>
                <ListProducts className="products__lists" />
            </div> */}
        </div>
    );
}

export default ProductDetail
