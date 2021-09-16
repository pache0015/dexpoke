import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import getPokeById from "../services/getPokeById";

export default function PokePage(){
    const { id } = useParams();

    const [imgFront, setImgFront] = useState()
    const [imgBack, setImgBack] = useState()
    const [imgOther, setImgOther] = useState()
    const [name, setName] = useState('')

    useEffect(() =>{
        getPokeById(id).then(data =>{
            setImgFront(data.sprites.front_default)
            setImgBack(data.sprites.back_default)
            setImgOther(data.sprites.other.dream_world.front_default)
        })
    }, [id])

    function capitalize(str){
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div>
            <img src={imgOther}/>
            <h3>{capitalize(name)}</h3>
        </div>
    );
}