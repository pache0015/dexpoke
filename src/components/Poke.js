import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import getAllPokeService from "../services/getAllPokes";
import getOnePokeService from "../services/getPoke";

export default function Poke({name, url}){
    const [id, setId] = useState()
    const [imgFront, setImgFront] = useState()
    const [imgBack, setImgBack] = useState()
    const [imgOther, setImgOther] = useState()

    useEffect(() =>{
        getOnePokeService(url).then(data =>{
            setId(data.id)
            setImgFront(data.sprites.front_default)
            setImgBack(data.sprites.back_default)
            setImgOther(data.sprites.other.dream_world.front_default)
        })
    }, [url])

    function capitalize(str){
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }
    return(
        <Link className="poke" to={`/poke/${url}`}>
            <img src={imgOther}/>
            <h3>{capitalize(name)}</h3>
        </Link>
    )
}