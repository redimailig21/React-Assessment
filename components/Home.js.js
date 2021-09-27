import { Link } from "react-router-dom";


const Home = () => {
    return (
        <home className="row">
            
            <h1>Welcome!</h1>
            <Link to="SignUp"><button className="btn btn-secondary">Add New</button></Link>
        </home>
    );
}

export default Home;