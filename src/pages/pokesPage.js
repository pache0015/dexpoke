import React, {useEffect, useState} from "react";
import getAllPokeService from "../services/getAllPokes";
import ListOfPokes from "../components/ListOfPokes";

export default function PokesPage(){

    const [pokes, setPokes] = useState([])
    useEffect(() =>{
        getAllPokeService().then(pokes =>{
            setPokes(pokes)
        })
    }, [pokes])
    //<!-- <img src="https://fontmeme.com/permalink/210909/8a80221862eebc306c5e6e0c02f40d9b.png" alt="fuente-pokemon" border="0" className="logo" /> -->

    return(
        <div className="pokesPage">
            <div className="title">
                <img src="https://fontmeme.com/permalink/210909/6b717e89b0cf6edee3eb1ad499b22000.png" alt="fuente-pokemon" border="0" className="logo" />
            </div>
            <ListOfPokes pokes={pokes}/>
        </div>
    )
}