import { Link } from 'react-router-dom';
import  StringFormater from '../../../helpers/StringFormater.class'

const Product = ({ className, id, name, image, price, state }) => {
    const newName = new StringFormater(name)
    return(
        <div className={ className }>
            {/* product__ */}
            <div className={ className+"__media" }>
                <a href={ `/detail/${ id }` } target='E_BLANK'>

                    <div className={ className+"__media--image"}>

                        <img src={`/media/images/products/${ image }`} alt="" className="img-fluid"/>
                    </div>

                </a>


                {/* <a href={ `/detail/${ id }` }> */}
                {/* </a> */}
            </div>
            <div className={ className+"__content" }>
                <div className={ `${className}__content--header` }>
                    <h6>{ newName.constrainer(0,23) }</h6>
                    <div className="price">
                        <span>${ price }</span>
                        <p>$14.4</p>
                    </div>
                </div>
                <div className={ `${className}__content--body` }>
                    <div className="options">
                        <div className="options__colors">
                            <div className='options__colors--color yellow'></div>
                            <div className='options__colors--color purple'></div>
                            <div className='options__colors--color brown'></div>
                            <div className='options__colors--color' style={{width:"auto"}}>+3</div>
                        </div>
                        <div className="options__sizes">
                            <div className='options__sizes--size'>L</div>
                            <div className='options__sizes--size'>M</div>
                            <div className='options__sizes--size'>S</div>
                            <div className='options__sizes--size' style={{width:"auto"}}>+1</div>
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
