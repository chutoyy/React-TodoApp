import UserInterface from "../interfaces/user.interface";

function FreelanceBox(props:{user: UserInterface} ) {
    return (
        <div className="freelance-box">

            <h2><b>#{props.user.id} -</b>
            <span className="title"> {props.user.company.bs} </span> </h2>
            <b>{props.user.name}</b><span className="clr-grey">@{props.user.username}</span>
            <hr/>
            <p>Email: {props.user.email}</p>
            <p>Phone: {props.user.phone}</p>
            <p>Website: {props.user.website}</p>
            <p>Address: {props.user.address.street} {props.user.address.suite}, {props.user.address.city} {props.user.address.zipcode}</p>
            <hr/>
            <div className="company">
                <p><b>{props.user.company.name}</b></p>
                <p>{props.user.company.catchPhrase}</p>
            </div>
        </div>
    )
}

export default FreelanceBox