import { Formik, Form, Field } from "formik";


const FormMaster = ( props ) => {

    return(
        <Formik onSubmit={ props.onSubmit } initialValues={ props.initialValues } enctype="multipart/form-data" >
            <Form className="row">

                { props.children }
                {/* <form className="row" method={ props.method } onSubmit={ props.onSubmit }>
                </form> */}
            </Form>
        </Formik>
    );
}

export default FormMaster;
