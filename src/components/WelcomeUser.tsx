interface UserProps {
    name: string
    age: number
}


function WelcomeUser({name, age}: UserProps) {
    return(
        <div>
            <h2> Welcome {name} ! </h2>
            <p> Apparemment vous aurez {age + 2} ans dans 2 ans </p>
        </div>
    )
}

export default WelcomeUser