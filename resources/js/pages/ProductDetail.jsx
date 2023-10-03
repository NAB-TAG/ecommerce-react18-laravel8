import { useLocation } from 'react-router-dom';
import '../../css/products/productDetail.css'
import '../../css/products/products.css'

import { useState } from 'react';
import HeaderProduct from '../components/Products/header/HeaderProduct';
import ListProducts from '../components/Products/body/ListProducts';


const ProductDetail = () => {
    const [ quantity, setQuantity] = useState(1);
    // funcion para incrementar la cantidad de productos
    const quantityIncrement = (e) => {
        e.preventDefault()
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
    const location = useLocation();
    const list = location.state;
    return(
        <div className="container">
            <div className="product-detail row">

                <div className=" product-detail__media p-2 col-md-5">
                    <div className="product-detail__media--image">
                        <img src={ `/media/images/products/4.jpg` } alt="" />
                    </div>
                </div>
                <div className="product-detail__content p-2 col-md-7">
                    <div className="product-detail__content--title">
                        <h2>White traditional long shirt</h2>
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
                        <h3 className='price'>$180,99</h3>
                        <h5 className='oldprice'>$219,99</h5>
                    </div>

                    <form action="" className='product-detail__content--options'>

                        <div className="product-detail__colors">
                            <h4 className='me-2'>Color:</h4>

                            <div>
                                <div className="product-detail__colors--color">
                                    <input type="radio" name='color' id='cored' className='color'/>
                                    <label htmlFor="cored" className="circle red" title='Rojo'></label>
                                </div>

                                <div className="product-detail__colors--color">
                                    <input type="radio" name='color' id='cogreen' className='color'/>
                                    <label htmlFor="cogreen" className="circle green" title='Verde'></label>
                                </div>

                                <div className="product-detail__colors--color">
                                    <input type="radio" name='color' id='coblue' className='color'/>
                                    <label htmlFor="coblue" className="circle blue" title='Azul'></label>
                                </div>

                                <div className="product-detail__colors--color">
                                    <input type="radio" name='color' id='cobrown' className='color'/>
                                    <label htmlFor="cobrown" className="circle brown" title='Marron'></label>
                                </div>

                                <div className="product-detail__colors--color">
                                    <input type="radio" name='color' id='coyellow' className='color'/>
                                    <label htmlFor="coyellow" className="circle yellow" title="Amarillo"></label>
                                </div>

                                <div className="product-detail__colors--color">
                                    <input type="radio" name='color' id='copurple' className='color'/>
                                    <label htmlFor="copurple" className="circle purple" title='Morado'></label>
                                </div>

                                <div className="product-detail__colors--color">
                                    <input type="radio" name='color' id='cowhite' className='color'/>
                                    <label htmlFor="cowhite" className="circle white" title='Blanco'></label>
                                </div>

                                <div className="product-detail__colors--color">
                                    <input type="radio" name='color' id='coblack' className='color'/>
                                    <label htmlFor="coblack" className="circle black" title='Negro'></label>
                                </div>
                            </div>

                        </div>

                        <div className="product-detail__sizes mt-3">
                            <div className="product-detail__sizes--numerics">
                                <h4 className='me-2'>Talla:</h4>
                                <div>

                                    <div className="product-detail__sizes--numeric">
                                        <input type="radio" name='size' id='co39' className='size'/>
                                        <label htmlFor="co39" className="circle 39" title='Talla 39'>39</label>
                                    </div>

                                    <div className="product-detail__sizes--numeric">
                                        <input type="radio" name='size' id='co40' className='size'/>
                                        <label htmlFor="co40" className="circle 40" title='Talla 40'>40</label>
                                    </div>

                                    <div className="product-detail__sizes--numeric">
                                        <input type="radio" name='size' id='co41' className='size'/>
                                        <label htmlFor="co41" className="circle 41" title='Talla 41'>41</label>
                                    </div>


                                </div>

                            </div>
                            <div className="product-detail__sizes--alphabetical"></div>
                        </div>

                        <div className="product-detail__more">
                            <div className='d-flex'>
                                <div className="product-detail__more--quantity">
                                    <button onClick={ (e) => quantityDecrement(e) }><i className="fa-solid fa-minus"></i></button>
                                        <input type="text" value={ quantity } onChange={() => {}}/>
                                    <button onClick={ (e) => quantityIncrement(e) }><i className="fa-solid fa-plus"></i></button>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi iste id enim voluptatum explicabo quia fuga, quae
                            placeat incidunt repellat alias soluta eaque ducimus,
                            itaque ab labore omnis illum doloremque!
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi iste id enim voluptatum explicabo quia fuga, quae
                            placeat incidunt repellat alias soluta eaque ducimus,
                            itaque ab labore omnis illum doloremque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi iste id enim voluptatum explicabo quia fuga, quae
                            placeat incidunt repellat alias soluta eaque ducimus,
                            itaque ab labore omnis illum doloremque!
                        </p>
                    </div>


                </div>
            </div>


            <div className="products">
                <HeaderProduct title="Puede que te guste" className="products__header"/>
                <ListProducts className="products__lists" />
            </div>
        </div>
    );
}

export default ProductDetail
