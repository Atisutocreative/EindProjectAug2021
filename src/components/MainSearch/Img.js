import React from 'react';

const Img = props =>
    <div>
        <a href={props.link}>
            <img src={props.url} alt=""/>
        </a>
        <p>
            Photo by
            <a href={props.user}>{props.name}</a>
            <a href={props.link}> See on Unsplash</a>
        </p>
    </div>;

export default Img;