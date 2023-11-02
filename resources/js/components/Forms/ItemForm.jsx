import ColorSelectForm from "./inputs/ColorSelectForm";
import FileInputForm from "./inputs/FileInputForm";
import InputForm from "./inputs/InputForm";
import SelectForm from "./inputs/SelectForm";
import SizesSelectForm from "./inputs/SizesSelectForm";
import TextAreaForm from "./inputs/TextAreaForm";

const ItemForm = ({ data }) => {
    switch (data.type) {
        case "select":
            return <SelectForm { ...data } />;
        case "textarea":
            return <TextAreaForm { ...data } />;
        case "color":
            return <ColorSelectForm { ...data }/>
        case "size":
            return <SizesSelectForm { ...data }/>
        case "file":
            return <FileInputForm { ...data }/>
        default:
            return <InputForm { ...data } />;
    }
}

export default ItemForm;
