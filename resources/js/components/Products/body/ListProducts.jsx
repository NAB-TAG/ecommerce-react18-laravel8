import { useEffect } from "react";
import NumberFormater from "../../../helpers/NumberFormater_class";
import Product from "./Product";

const products = [
    { id: 1, name: 'White traditional long dress', image: '1.jpg', price: 3400 },
    { id: 2, name: 'Long sleave denins jacket', image: '2.jpg', price: 3400 },
    { id: 3, name: 'Hush Puppies', image: '3.jpg', price: 3400 },
    { id: 4, name: 'Athenis skirt', image: '4.jpg', price: 34000 },
    { id: 5, name: 'White traditional long dress', image: '5.jpg', price: 34000 },
    { id: 6, name: 'Long sleave denins jacket', image: '6.jpg', price: 34000 },
    { id: 7, name: 'Hush Puppies', image: '7.jpg', price: 3400 },
    { id: 8, name: 'Athenis skirt', image: '8.jpg', price: 34000000 },
    { id: 9, name: 'White traditional long dress', image: '9.jpg', price: 3400 },
    { id: 10, name: 'Long sleave denins jacket', image: '10.jpg', price: 34000 },
    { id: 11, name: 'Hush Puppies', image: '11.jpg', price: 34000 },
    { id: 12, name: 'Athenis skirt', image: '12.jpg', price: 34000 },

]


const ListProducts = ({ className }) => {
    const halfIndex = Math.ceil(products.length / 2);

    const firstHalf = products.slice(0, halfIndex);
    const secondHalf = products.slice(halfIndex);
console.log(firstHalf);
console.log(secondHalf)
    return(
        <div className={ className }>
            <div className="col-md-6" id="col-1">
                { firstHalf.map(( product ) => {
                    return <Product className="product" key={product.id} {...product} state={ product } />
                }) }
            </div>
            <div className="col-md-6" id="col-2">
                { secondHalf.map(( product ) => {
                    return <Product className="product" key={product.id} {...product} state={ product } />
                }) }
            </div>

        </div>
    );
}



export default ListProducts
