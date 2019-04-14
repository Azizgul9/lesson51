import React from 'react';
import './Film.css';

const Film = (props) => {
    return (
           <div className={"film-card"} style={{
               margin: '10px',
               padding: '10px',
               width: '300px',
               textAlign: 'center',
               color: 'crimson',
               fontWeight: 'bolder'
           }}>
            <img src={props.src} alt={props.alt} style={{width: '100%'}}/>
            <h2>{props.name}</h2>
            <p>{props.year}</p>
           </div>
    );
};

export default Film;