import Slider from "rc-slider";
import { useRef, useState } from "react";
import 'rc-slider/assets/index.css';

const RangeForm = ({ min, max, className }) => {
    // Defino los rangos en un estado
    const [range, setRange] = useState([min, max]);
    // hago referencia a los inputs de tipo text
    const minPriceRef = useRef();
    const maxPriceRef = useRef();

    // Funcion para cambiar los rangos de numeros cada vez que hay un cambio en el input type="range"
    const handleRangeChange = (newRange) => {
        // Actualizo el array de rangos
        setRange(newRange);
        // Asigno los nuevos valores a los inputs type text
        minPriceRef.current.value = newRange[0];
        maxPriceRef.current.value = newRange[1];
    };
    // Funcion para actualizar los rangos cada vez que hay un cambio en el input type="text" name="min" (Ln:34)
    const handleChangeMin = (e) => {
        setRange([minPriceRef.current.value, maxPriceRef.current.value])
    }
    // Funcion para actualizar los rangos cada vez que hay un cambio en el input type="text" name="max" (Ln:37)
    const handleChangeMax = (e) => {
        setRange([minPriceRef.current.value, maxPriceRef.current.value])
    }
    return (
        <div className={ className }>
            <div className="d-flex justify-content-evenly">
                {/* Input para filtrar la cantidad minima*/}
                <div className={ className+'--inputs' }>
                    <p>Min:</p>
                    <input type="text" name="min" defaultValue={range[0]} ref={ minPriceRef } onChange={(e) => handleChangeMin(e)}/>
                </div>
                {/* Input para filtrar la cantidad maxima*/}
                <div className={ className+'--inputs' }>
                    <p>Max:</p>
                    <input type="text" name="max" defaultValue={range[1]} ref={ maxPriceRef } onChange={(e) => handleChangeMax(e)}/>
                </div>
            </div>
            <div className="px-1">

                <Slider
                    range
                    min={min}
                    max={max}
                    step={(max - min) / 10}
                    styles={{track: {backgroundColor: "#070a57"}, handle: {backgroundColor: '#070a57', border: '3px solid #070a57'}}}
                    minimunTrackStyle={{backgroundColor: 'yellow'}}
                    pushable={ true }
                    value={range}
                    onChange={handleRangeChange}
                    className="mt-4 mb-1 "
                />
            </div>
            <div className="">
                <span>{`$${range[0]}`} - </span>
                <span>{`$${range[1]}`}</span>
            </div>
        </div>
    )
}

export default RangeForm;
