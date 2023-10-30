const Form = ( props ) => {
    return(
        <form action={ props.url } className="row" method={ props.method } onSubmit={ props.onSubmit }>
            { props.children }
        </form>
    );
}

export default Form;
