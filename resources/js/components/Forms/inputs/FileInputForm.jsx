import { Field } from "formik";
import { useRef, useState } from "react";

const FileInputForm = ({ type, col, name, value, label,id }) => {
    // const [ images, setImages ] = useState();

    const imagesRef = useRef();
    const imageRef = useRef();

    const clickHandle = () => {
        const fileInput = document.getElementById(id);
        fileInput.click();
    }
    const handleChange = () => {
        const file = document.getElementById(id);

        const imagesDiv = document.querySelectorAll(".input-img-new");
        imagesDiv.forEach((image) => {
            image.remove();
          });
        Object.keys(file.files).forEach((key) => {
            const value = file.files[key];


            const reader = new FileReader();
            reader.onload = function(e) {
                const imageElement = document.createElement('IMG');

                imageElement.classList.add('input-img');
                imageElement.classList.add('input-img-new');

                imageElement.src = e.target.result;

                imagesRef.current.appendChild(imageElement)
              };

            reader.readAsDataURL(value);
        })
    }
    return(
        <div className={ ` input-images` } >
			<label htmlFor="">{ label }</label>
			<div className="input-group mb-3">
                <Field type={ type } className="form-control d-flex " name={ name } value={ value } id={ id } multiple onChange={ ()=> handleChange() }/>
			</div>
            <div className="d-flex gap-1">

                <div className="d-flex flex-wrap gap-1" ref={ imagesRef }>

                <div className="input-img " ref={ imageRef } onClick={()=> clickHandle()}>
                    <i className="fas fa-plus"></i>
                </div>
                </div>
            </div>
		</div>
    );
}

export default FileInputForm
