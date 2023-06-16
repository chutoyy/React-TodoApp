import { Helmet } from "react-helmet"
import WelcomeUser from "../../components/WelcomeUser"

function DefaultPage(){
    return (
        <div>
            <Helmet>
                <title> HomePage</title>  
            </Helmet>
            <h1>Homepage</h1>
            <WelcomeUser
                name="Mégane"
                age={22}
            />
        </div>
    )
}

export default DefaultPage