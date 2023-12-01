const ProductSkeleton = ( {className} ) => {

    return(
        <div className={ className }>
            {/* product__ */}

            <div className={ className+"__media" }>
                <a href={ `/detail/` } target='E_BLANK'>

                    <div className={ className+"__media--image"}>

                    </div>

                </a>


                {/* <a href={ `/detail/${ id }` }> */}
                {/* </a> */}
            </div>
            <div className={ className+"__content" }>
                <div className={ `${className}__content--header` }>
                    <div className="title">
                        <h6></h6>
                    </div>
                    <div className="title">
                        <h6></h6>
                    </div>
                    {/* <div className="price">
                        <span>$250</span>
                        <p>$300</p>
                    </div> */}
                </div>
                <div className={ `${className}__content--body` }>
                    <div className="options">
                        <div className="options__colors">
                            <div className='options__colors--color' ></div>
                            <div className='options__colors--color' ></div>
                            <div className='options__colors--color' ></div>
                        </div>
                    </div>
                    <div className="rating">
                        <div></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductSkeleton;
