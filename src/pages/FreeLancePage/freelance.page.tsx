import { Helmet } from "react-helmet"
import FreelanceBox from "../../components/FreelanceBox"
import axios from "axios";
import { useEffect, useState } from "react";
import UserInterface from "../../interfaces/user.interface";


function FreelancePage(){
    const [users, setUser] = useState<UserInterface[]>([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setUser(response.data);
        });
    }, []);
    const baseURL = "https://jsonplaceholder.typicode.com/users";


    if (!users) return null;


    return(
        <div>
            <Helmet>
                <title> Freelance</title>  
            </Helmet>
            <h1>
                Freelance Page
            </h1>
            {users.map((user, index)=>{
                return(
                    <FreelanceBox
                        key={index}
                        user={user}
                    />
                )
            })}

        </div>
    )
}

export default FreelancePage