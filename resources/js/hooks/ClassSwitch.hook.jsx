export const activeClass = ( target ) => {
    let element = document.getElementById( target );
    element.classList.add('active');
}

export const desactiveClass = async ( target ) => {
    try {

        let element = await document.getElementById( target );
        element.classList.remove('active');
    } catch (error) {
        console.log(error)
    }
}


