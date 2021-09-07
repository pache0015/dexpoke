import React from "react";

export default function Poke({name, url}){
    return(
        <h3>
            <a href={url}>
                {name}
            </a>
        </h3>
    )
}