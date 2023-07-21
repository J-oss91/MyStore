import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Welcome to the store page</h1>
            <Link to= "/store"> Enter Store</Link>
            <Link to="/cart"> Go to Cart</Link>
        
        </div>

    );
}

export default Home;