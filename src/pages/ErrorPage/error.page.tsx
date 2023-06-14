import { Helmet } from "react-helmet"
import peepo from "./pepehands.jpg"

function ErrorPage(){
    return (
        <div>
            <Helmet>
                <title> Error</title>  
            </Helmet>
            <img src={peepo} alt="Sadge"/>
        </div>
    )
}

export default ErrorPage