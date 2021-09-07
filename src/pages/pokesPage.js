import React, {useEffect, useState} from "react";
import getAllPokeService from "../services/pokeService";
import ListOfPokes from "../components/ListOfPokes";

export default function PokesPage(){

    const [pokes, setPokes] = useState([])
    useEffect(() =>{
        getAllPokeService().then(pokes =>{
            setPokes(pokes)
        })
    }, [pokes])

    return(
        <div>
            <h1>
                Dexpoke
            </h1>
            <ListOfPokes pokes={pokes}/>
        </div>
    )
}