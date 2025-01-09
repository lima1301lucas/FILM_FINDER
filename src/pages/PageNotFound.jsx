import { Link } from "react-router-dom";
import notfound from "../assets/pagenotfound.png";

export const PageNotFound = () => {
    return(
        <div className="container">
            <img src={notfound} className="img-fluid" />
            <p className="text-center">
                <Link to="/" className="btn btn-danger">Go to home page</Link>
            </p>
        </div>
    );
}