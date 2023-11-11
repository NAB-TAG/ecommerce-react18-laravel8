
const FormNormal = ( props ) => {

    return(
        <form enctype="multipart/form-data" >
            <div className="row">

                { props.children }

            </div>
        </form>
    );
}

export default FormNormal;
