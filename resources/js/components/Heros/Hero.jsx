import '../../../css/hero/hero.css';
import Slider from '../../helpers/Slider.class';
const heros = [
    { id: 1, title: "50% de descuento en toda la marca nike, y 30% de descuento en zapatillas para hombres", image: "1.jpg" },
    { id: 2, title: "50% de descuento en toda la marca nike, y 30% de descuento en zapatillas para hombres", image: "2.jpg" },
    { id: 3, title: "50% de descuento en toda la marca nike, y 30% de descuento en zapatillas para hombres", image: "1.jpg" },
]
const slider = new Slider('hero__slider--cart');
slider.transition('right')
const Hero = () => {
    return(
        <div className="col-md-9 hero">
            <div className="hero__slider" >
                <div className="hero__slider--buttons">
                    <button onClick={ () => slider.moveLeft() }>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button onClick={ () => slider.moveRight() }>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                { heros.map(( hero ) => {
                    return(

                        <div className="hero__slider--cart" key={ hero.id } onMouseDown={ (e) => slider.grabbing(e) } onMouseUp={ (e) => slider.drop(e)}>

                            <div className="hero__slider--cart--content">
                                <a href="/hero">
                                    <h3>{ hero.title }</h3>
                                </a>

                            </div>
                            <img src={ `./media/images/hero/${ hero.image }` } alt="" />

                        </div>
                    );
                }) }

            </div>
        </div>
    );
}


export default Hero
