import React from "react";
import Poke from "./Poke";

export default function ListOfPokes({pokes}){
    let pokesToRender;
    pokes ?
        pokesToRender = pokes.map(poke =>
            <Poke
                key={poke.name}
                name={poke.name}
                url={poke.url}
            />
        ) : pokesToRender = "Loading..."
    return <div className="listOfPokes">
        {
            pokesToRender
        }
    </div>
}