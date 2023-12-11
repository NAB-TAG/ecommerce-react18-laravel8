import Slider from "rc-slider";
import { useEffect, useRef, useState } from "react";
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from "react-redux";
import { updatePagProducts } from "../../../store/Slices/paginationSlice";
import { updateMaxSearchProduct, updateMinSearchProduct } from "../../../store/Slices/searchSlice";

const RangeSkeleton = ({ min, max, className }) => {
    // Defino constantes
    const dispatch = useDispatch();
    const search = useSelector(state => state.search.searchProduct);

    // Defino los rangos en un estado
    const [range, setRange] = useState([min, max]);
    const [ newRangeUpdated, setNewRangeUpdated ] = useState([]);
    const [ switchRange, setSwitchRange ] = useState(false)
    // hago referencia a los inputs de tipo text (Ln:63)(Ln:68)
    const minPriceRef = useRef();
    const maxPriceRef = useRef();

    // Funcion para cambiar los rangos de numeros cada vez que hay un cambio en el input type="range"
    const handleRangeChange = (newRange) => {
        // Actualizo el array de rangos
        setRange(newRange);
        // Asigno los nuevos valores a los inputs type text
        minPriceRef.current.value = newRange[0];
        maxPriceRef.current.value = newRange[1];

        // Actualizo el store de redux
            // Los rangos de precios de los productos, seran utiles cuando le ponga otros filtros
            dispatch(updateMinSearchProduct(newRange[0]));
            dispatch(updateMaxSearchProduct(newRange[1]));
        // actualizo el estado con el rango mas reciente
        setNewRangeUpdated(newRange);
        setSwitchRange(true)
        // dispatch(updatePagProducts( `/api/products/search/${search}/min=${newRange[0]}/max=${newRange[1]}` ));
    };

    // Para que el store cambie solo cuando haya pasado 1 segundo sin ningun cambio
    useEffect(() => {
        // Si pasa un segundo sin cambiar sus valores se manda al store
        if (switchRange) {

            const updateStore = setTimeout(() => {
                dispatch(updatePagProducts( `/api/products/search/${search == '' ? ' ' : search}/min=${newRangeUpdated[0]}/max=${newRangeUpdated[1]}` ));
                setSwitchRange(false)
            }, 1000);

            // Cancelar la actualizacion si el usuario sigue modificando el rango
            return() => {
                clearTimeout(updateStore)
            }
        }
    },[newRangeUpdated]);

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
            <div className="d-flex justify-content-between">
                {/* Input para filtrar la cantidad minima*/}
                <div className={ className+'--inputs animation' }>
                    <div></div>
                </div>
                {/* Input para filtrar la cantidad maxima*/}
                <div className={ className+'--inputs animation' }>
                    <div></div>
                </div>
            </div>
            <div className="px-1">

                <Slider
                    range
                    min={min}
                    disabled={1}
                    max={max}
                    step={(max - min) / 10}
                    styles={{track: {backgroundColor: "rgba(0, 0, 0, 0.07)"}, handle: {backgroundColor: 'rgba(0, 0, 0, 0.2)', border: '3px solid rgba(0, 0, 0, 0.0)'}}}
                    minimunTrackStyle={{backgroundColor: 'yellow'}}
                    pushable={ true }
                    value={range}
                    onChange={handleRangeChange}
                    className="mt-4 mb-1 "
                />
            </div>
            <div className={ `${className}--pointer d-flex` }>
                <div className="animation mt-1 me-1"><div></div></div>
                <div className="animation mt-1"><div></div></div>
            </div>
        </div>
    )
}

export default RangeSkeleton;