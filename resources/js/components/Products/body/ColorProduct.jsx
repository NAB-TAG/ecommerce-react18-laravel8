const ColorProduct = ({ color, current, length }) => {

        return(
        <>

            {current <= 3 ?

                <div className='options__colors--color' style={{backgroundColor: color}} ></div>
                :
                current == 4 ?
                    <div className='options__colors--color' style={{width:"auto"}}>{`+${length - 3}`}</div>
                :
                <></>
            }

        </>
    );
}

export default ColorProduct
