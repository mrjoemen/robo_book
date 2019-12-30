import React from 'react';

const Card = ({ id, name, username, email }) => {
    return (
        <div className = "tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src ={`https://robohash.org/${id}?size=200x200`} alt = "roboFriend"></img>
            <div>
                <h1>{name}</h1>
                <p>{username}</p>
                <p> {email}</p>
            </div>
        </div>
    );
}

export default Card;