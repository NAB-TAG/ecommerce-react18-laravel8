import './ProductDetailSkeleton.css'

const ProductDetailSkeleton = () => {
    return (
        <div className="product-detail-skeleton row">

            <div className=" product-detail__media skeleton p-2 col-md-4">
                <div className='animation'>
                    <div></div>
                </div>
            </div>
            <div className="product-detail__content p-2 col-md-8">
                <div className="product-detail__content--title">
                    <h2 className='animation'><div></div></h2>
                    <div className="d-flex align-items-center labels">
                        <div className='animation'><div></div></div>
                        <div className='animation'><div></div></div>
                        <div className='animation'><div></div></div>
                    </div>
                    <p className='mt-2 animation'><div></div></p>
                </div>
                <div className="product-detail__content--price">
                    <h3 className='price animation'><div></div></h3>
                    <h5 className='oldprice animation'><div></div></h5>
                </div>

                <form action="" className='product-detail__content--options'>

                    <div className="product-detail__colors">
                        <h4 className='me-2'>Color:</h4>

                        <div className='skeleton-div'>
                            <div className="product-detail__colors--color skeleton animate"></div>
                            <div className="product-detail__colors--color skeleton animate"></div>
                            <div className="product-detail__colors--color skeleton animate"></div>

                            {/* { colors.map((color, index) => {
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
                            })} */}

                        </div>

                    </div>

                    <div className="product-detail__sizes mt-3">
                        <div className="product-detail__sizes--numerics">
                            <h4 className='me-2'>Talla:</h4>
                            <div className='skeleton-div'>
                                <div className="product-detail__sizes--size skeleton animate"></div>
                                <div className="product-detail__sizes--size skeleton animate"></div>
                                <div className="product-detail__sizes--size skeleton animate"></div>
                            {/* { sizes.map((size, index) => {
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
                            })} */}

                            </div>

                        </div>
                        <div className="product-detail__sizes--alphabetical"></div>
                    </div>

                    <div className="product-detail__more">
                        <div className='d-flex'>
                            <div className="product-detail__more--quantity skeleton">
                                <button onClick={e => e.preventDefault()}><i className="fa-solid fa-minus"></i></button>
                                    <input type="text" value="1" onChange={() => {}}/>
                                <button onClick={e => e.preventDefault()}><i className="fa-solid fa-plus"></i></button>
                            </div>

                            <button className="product-detail__more--buy skeleton" onClick={(e) => e.preventDefault()}>Comprar</button>
                        </div>
                        <div className="product-detail__more--actions">
                            <button className="btn"><i className="fas fa-heart"></i> Agregar a favoritos</button>
                            <button className="btn"><i className="fas fa-share"></i> Compartir</button>
                            <button className="btn"><i className="fas fa-shopping-cart"></i> Agregar al carrito</button>

                        </div>
                    </div>

                </form>

                <div className="product-detail__content--description skeleton">
                    <h4>Descripcion</h4>
                    <p className='animation'><div></div></p>
                    <p className='animation'><div></div></p>
                    <p className='animation'><div></div></p>
                    <p className='animation'><div></div></p>
                    <p className='animation'><div></div></p>
                    <p className='animation'><div></div></p>
                    <p className='animation'><div></div></p>
                </div>


            </div>
        </div>
    );
}

export default ProductDetailSkeleton;
