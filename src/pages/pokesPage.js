import React, {useEffect, useState} from "react";
import getAllPokeService from "../services/getAllPokes";
import ListOfPokes from "../components/ListOfPokes";
import Searchbar from "../components/Searchbar";

export default function PokesPage(){

    const [pokes, setPokes] = useState([])
    const [cantPokes, setCantPokes] = useState(9)
    useEffect(() =>{
        getAllPokeService(cantPokes).then(pokes =>{
            setPokes(pokes)
        })
    }, [pokes])
    function viewMore(){
        setCantPokes(cantPokes +9)
    }
    //<!-- <img src="https://fontmeme.com/permalink/210909/8a80221862eebc306c5e6e0c02f40d9b.png" alt="fuente-pokemon" border="0" className="logo" /> -->
    // https://fontmeme.com/es/fuente-pokemon/

    return(
        <div className="pokesPage">
            <div className="title">
                <img src="https://fontmeme.com/permalink/210909/6b717e89b0cf6edee3eb1ad499b22000.png" alt="fuente-pokemon" border="0" className="logo" />
            </div>
            <Searchbar/>
            <ListOfPokes pokes={pokes}/>
            <div className="more" onClick={viewMore}>
                Mostrar más
            </div>
            <div className="footer">
                Ningún derecho reservado - By Facu
            </div>
        </div>
    )
}