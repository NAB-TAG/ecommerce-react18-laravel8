import InputForm from "./inputs/InputForm";
import SelectForm from "./inputs/SelectForm";
import TextAreaForm from "./inputs/TextAreaForm";

const ItemForm = ({ data }) => {
    console.log(data)
    switch (data.type) {
        case "select":
            return <SelectForm { ...data } />;
        case "textarea":
            return <TextAreaForm { ...data } />;
        case "image":
            return (
                <div className={data.col}>
                    <img { ...data } className='img-fluid' />
                </div>
            );
        default:
            return <InputForm { ...data } />;
    }
}

export default ItemForm;
