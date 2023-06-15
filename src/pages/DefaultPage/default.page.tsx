import { Helmet } from "react-helmet"

function DefaultPage(){
    return (
        <div>
            <Helmet>
                <title> HomePage</title>  
            </Helmet>
            <h1>Homepage</h1>
        </div>
    )
}

export default DefaultPage