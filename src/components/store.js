import {useState}from "react";
import Product from "./product";
function Store(){
// add a productList, and a function to add products using state
    const [productList, setProductList] = useState([
        {name: "Nike", price: "50.00", id: 2, color: " Green"},
        {name:"Polo", price: "20.00", id: 5, color: " Yellow" },
        { name :"Reto Jorden 11", price: "150.00", id: 6 , color: " Red/Black "}
    ]);
// function to add new products by using the "add new product" button
// const addProduct = (newProduct) =>{
//     setProductList([...productList, newProduct]);
//}
//Add products to product list using handleInputChange, and handleLAddProduct button
const [newProduct, setNewProduct] = useState({
    name:"",
    price:""
});
// handleChange
const handleInputChange =(event) =>{
    setNewProduct({
        ...newProduct, [event.target.name]: event.target.value
    });
}
    //handleAddProduct
    const handleAddProduct = () =>{
        if(newProduct.name && newProduct.price){
            setProductList([...productList,{...newProduct}]);
            setNewProduct({name:"",price:""})
        }
};
    return (
        <div>
            <h1>Store</h1>
            <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}/>
            <input
            type="text"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}/>
            <button onClick={handleAddProduct}>Add New Product</button>
            {productList.map((product)=> (
                <Product
                name={product.name}
                price={product.price}
                key={product.id}
                />
            ))}
        </div>
    );
};
export default Store;