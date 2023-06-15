import { Helmet } from "react-helmet"
import peepo from "./pepehands.jpg"
import { Link } from "react-router-dom"

function ErrorPage(){
    return (
        <div>
            <Link to="/"> Home</Link>
            <Helmet>
                <title> Error</title>  
            </Helmet>
            <img src={peepo} alt="Sadge"/>
        </div>
    )
}

export default ErrorPage