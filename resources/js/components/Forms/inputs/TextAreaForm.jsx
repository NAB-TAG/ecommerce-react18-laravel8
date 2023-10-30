const TextAreaForm = ({ icon, col, options, label, name, value }) => {
    return(
        <div className={ col } >
		<label htmlFor="exampleFormControlTextarea1">{ label }</label>
			<div className={ "input-group p-0 "+col }>
                {/* <div className="mb-3"> */}
                    {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name={ name } defaultValue={ value }></textarea>
                {/* </div> */}
			</div>
		</div>
    );
}

export default TextAreaForm
