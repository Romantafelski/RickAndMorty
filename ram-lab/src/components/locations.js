
const Location = (props) => {

    return (
        <div class = "cards">
            <p>{props.location.name}</p>
            <p>{props.location.type}</p>
            <p>{props.location.dimension}</p>
        </div>
    )
  
}

export default Location