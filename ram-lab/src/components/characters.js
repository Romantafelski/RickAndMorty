const Character = (props) => {
    return (
        <div class="cards">

            <p class="data" >{props.character.name}</p>
            <img class="data" src={props.character.image}/>
            <p class="data" >{props.character.species}</p>
            <p class="data" >{props.character.status}</p>
            <p class="data" >{props.character.gender}</p>
            <p class="data" >{props.character.origin.name}</p>
        </div>
    )
}
export default Character