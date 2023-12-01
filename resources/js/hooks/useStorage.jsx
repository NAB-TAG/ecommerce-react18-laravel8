import { useState } from "react";

function useStorage( key, initialValue )
{
    // Obtener el valor del localStorage "key"
    const storedValue = localStorage.getItem( key );
    // Si no existe un valor en el localStorage poner el valor inical
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [ value, setValue ] = useState(initial);

    // Funcion para actualizar el estado en el LocalStorage
    const updateValue = ( newValue ) => {
        setValue( newValue );
        localStorage.setItem( key, JSON.stringify(newValue))
    }

    return [value, updateValue ];
}

export default useStorage;
