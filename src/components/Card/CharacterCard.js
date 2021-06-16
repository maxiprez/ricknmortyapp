import React from 'react';
import './CharacterCard.css';

export default function CharacterCard({ data }) {

    let createDateCharacter = data.created.slice(0,10);
    createDateCharacter = createDateCharacter.split("-").reverse().join("-");

    return (
        <div className="container">
          <main className="grid">
            <article>
                <img src={data.image} alt={data.id}/>
                <div className="text ">
                    <h4>{data.name}</h4>
                    <ul>
                        { 
                            data.status === 'Alive' ?
                            <li><strong>Status:</strong> <span className="data-status__alive">{data.status}</span></li> : 
                            <li><strong>Status:</strong> <span className="data-status__dead__unknow">{data.status}</span></li>
                        }
                        <li><strong>Specie:</strong> {data.species}</li>
                        <li><strong>Gender:</strong> {data.gender}</li>
                        <li><strong>Origin:</strong> {data.origin.name}</li>
                    </ul>
                    <p className="card-text"><strong className="text-muted">Created: </strong><small className="text-muted">{createDateCharacter}</small></p>
                </div>
            </article>
          </main>
        </div>
    )
}
