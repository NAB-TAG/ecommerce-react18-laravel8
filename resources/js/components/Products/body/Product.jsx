import { Link } from 'react-router-dom';
import  StringFormater from '../../../helpers/StringFormater.class'
import ColorProduct from './ColorProduct';
import SizeProduct from './SizeProduct';


const Product = ({ className, id, name, image, file_path, price, discount, colors, sizes }) => {
    const newName = new StringFormater(name)
    price = parseInt(price);
    colors = JSON.parse(colors);
    sizes = JSON.parse(sizes);

    return(
        <div className={ className }>
            {/* product__ */}

            <div className={ className+"__media" }>
                <a href={ `/product/detail/${ id }` } target='E_BLANK'>

                    <div className={ className+"__media--image"}>

                        <img src={`/media/images/products/${file_path}/${ JSON.parse(image)[0] }`} alt="" className="img-fluid"/>
                    </div>

                </a>


                {/* <a href={ `/detail/${ id }` }> */}
                {/* </a> */}
            </div>
            <div className={ className+"__content" }>
                <div className={ `${className}__content--header` }>
                    <h6>{ newName.constrainer(0,23) }</h6>
                    <div className="price">
                        <span>${ Math.ceil(price) }</span>
                        <p>${ Math.ceil(price+(discount / 100 )* price) }</p>
                    </div>
                </div>
                <div className={ `${className}__content--body` }>
                    <div className="options">
                        <div className="options__colors">
                            { colors.map((color, index) => {
                                return <ColorProduct key={index} color={ color } current={index+1} length={ colors.length }/>
                            }) }
                        </div>
                        <div className="options__sizes">
                            { sizes.map((size, index) => {
                                return <SizeProduct key={index} size={ size } current={index+1} length={ sizes.length }/>
                            }) }
                        </div>
                    </div>
                    <div className="rating">
                        <i className="fa-regular fa-star"></i>
                        <p>4.2</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Product;
