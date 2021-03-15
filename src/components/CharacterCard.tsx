interface CharacterCardProps {
    character: {
        name: string;
        gender: string;
        house: string;
        ancestry: string;
        image: string;
        patronus: string;
    }
}

export function CharacterCard(props: CharacterCardProps) {
    return (
        <div className="card">
            <img src={props.character.image} alt={props.character.name}/>
            <div className="container-card">
                <h2>{props.character.name}</h2>
                <p><span>House:</span> {props.character.house}</p>
                <p><span>Gender:</span> {props.character.gender}</p>
                <p><span>Patronus:</span> {props.character.patronus}</p>
                <p><span>Ancestry:</span> {props.character.ancestry}</p>
            </div>
        </div>
    )
}