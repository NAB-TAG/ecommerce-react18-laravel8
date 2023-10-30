const InputForm = ({ icon, type, placeholder, col, name, value, label }) => {
    return(
        <div className={ col } >
			<label htmlFor="">{ label }</label>
			<div className="input-group mb-3">
				<span className="input-group-text" id="basic-addon1"><i className={ icon }></i></span>
				<input type={ type } className="form-control" placeholder={ placeholder } aria-label={ placeholder } name={ name } defaultValue={ value }/>
			</div>
		</div>
    );
}

export default InputForm
