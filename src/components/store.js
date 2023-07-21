import {useState}from "react";
import Product from "./product";
import Cart from "./cart";


function Store(){
// add a productList, and a function to add products using state
    const [productList, setProductList] = useState([
        {name: "Nike", price: "50.00",  color: " Green"},
        {name:"Polo", price: "20.00",  color: " Yellow" },
        { name :"Reto Jorden 11", price: "150.00",  color: " Red/Black "}
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
const [cartItems, setCartItems] = useState([

]);


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
            setNewProduct({name:"",price:"", color:""})
            }
};

     //creat a remove function by name 
     const handleRemoveProduct = (productName) => {
           setProductList(productList.filter((product) => product.name !== productName))
    };
    

    const handleAddToCart = (product) => {
            const existingProduct = cartItems.find((product) => product.name === newProduct.name);
            if (existingProduct) {
            const updatedCartItems = cartItems.map((item) => item.name === existingProduct.name ? { ...item, quantity: item.quantity +1 } : item
                );
            setCartItems(updatedCartItems);
                    } else {
            setCartItems([...cartItems, {...product, quantity: 1 }]);
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
            <button onClick={() => handleRemoveProduct(newProduct.name)}>
               Remove Product
              </button>
              <button onClick={() => handleAddToCart(newProduct)}> Add to Cart
    
              </button>
              {productList.map((product)=> (
                <Product
                name={product.name}
                price={product.price}
                color={product.color}
                />
                
                 ))};
           <div>
                <Cart cartItems={cartItems}/>
           </div>
    
     </div>
    );
};
export default Store;