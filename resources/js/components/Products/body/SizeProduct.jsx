const SizeProduct = ({ size, current, length }) => {

    return(
    <>

        {current <= 3 ?

            <div className='options__sizes--size'>{ size }</div>
            :
            current == 4 ?
                <div className='options__sizes--size' style={{width:"auto"}}>{`+${length - 3}`}</div>
            :
            <></>
        }

    </>
);
}

export default SizeProduct
