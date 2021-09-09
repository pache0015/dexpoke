import React from "react";
import {useParams} from "react-router-dom";

export default function PokePage(){
    const { id } = useParams();
    return (
        <h3>Requested topic ID: {id}</h3>
    );
}