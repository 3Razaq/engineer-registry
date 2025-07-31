const React = require("react")

function Show(props)
{
    const {_id,name,specialty,yearsExperience,available}= props.engineer
    return(
        <div>

            <h1>{name}</h1>
            <a href="/engineers">Back to the index</a>
            <p>Specialty: {specialty}</p>
            <p>Years of experience {yearsExperience}</p>
            <p>available:{available?`is available`:`Is not available`}</p>
            <a href={`/engineers/${_id}/edit`}>edit</a>
            <form action={`/engineers/${_id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE ENGINEER" />
            </form>
        </div>
    )
}

module.exports=Show
