//name
//price

function Product(props) {
    return(
        <div>
            <h2>{props.name}</h2>

         <p>Price: ${props.price}</p>
         <p>Color: {props.color}</p>
        </div>
    );
};


export default Product;