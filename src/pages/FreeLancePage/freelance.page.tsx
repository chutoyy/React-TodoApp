import { Helmet } from "react-helmet"
import FreelanceBox from "../../components/FreelanceBox"
import axios from "axios";
import { useEffect, useState } from "react";
import UserInterface from "../../interfaces/user.interface";


function FreelancePage() {
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [loading, setLoading] = useState(true)

    const loadData = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
        setLoading(false)
    }
    useEffect(() => {
        loadData()
    }, []);


    if (!users) return null;


    if (loading == true) return <h1>Loading...</h1>
    return (
        <div>
            <Helmet>
                <title> Freelance</title>
            </Helmet>
            <h1>
                Freelance Page
            </h1>
            {users.map((user, index) => {
                return (
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