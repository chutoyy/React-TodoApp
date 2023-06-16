import { Link } from "react-router-dom";
import UserInterface from "../interfaces/user.interface";


function FreelanceBox({user}:{user: UserInterface} ) {
    return (
        <div className="freelance-box">
            
            <h2><b>#{user.id} -</b>
            <span className="title"> {user.company.bs} </span> </h2>
            <b>{user.name}</b><span className="clr-grey">@{user.username}</span>
            <hr/>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Address: {user.address.street} {user.address.suite}, {user.address.city} {user.address.zipcode}</p>
            <hr/>
            <div className="company">
                <p><b>{user.company.name}</b></p>
                <p>{user.company.catchPhrase}</p>
            </div>
            <Link to={`/freelance/${user.id}`}>See posts</Link>
        </div>
    )
    
}

export default FreelanceBox