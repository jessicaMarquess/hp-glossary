import { useState, useEffect } from 'react';
import { CharacterCard } from './CharacterCard'; 

import "../styles/searchingcharacter.scss";

interface Character {
        name: string;
        gender: string;
        house: string;
        ancestry: string;
        image: string;
        patronus: string;
}

export function SearchingCharacters(){

    const [characters, setCharacters] = useState<Character[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then(response => response.json())
        .then(data => setCharacters(data));
    }, []);

    return(
        <section className="hp-searching container">
            <header>
                <h2>Filter Character: </h2>
                <input 
                    className="input-filter" 
                    type="text" 
                    placeholder="Type the name from character"
                    onChange={e=>{setSearch(e.target.value)}}
                />
            </header>
            <div className="container">
                {characters.filter((character)=>{
                    if(search == "") {
                        return character;
                    }else if (character.name.toLowerCase().includes(search.toLowerCase())){
                        return character;
                    }
                }).map( character => {
                    return <CharacterCard key={character.name} character={character} />
                })}
            </div>
        </section>
    )
}