import React from "react";
import Card from "./card";


const CardList = ({ robots }) => {
    let roboArray = robots.map((user, i) => {
        return <Card key = {robots[i].id} id = {robots[i].id} name = {robots[i].name} username= {robots[i].username} email = {robots[i].email}/>
    });

    return (
        <div>
            {roboArray}
        </div>
    );
}

export default CardList;