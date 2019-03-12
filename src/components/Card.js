import React from 'react';
import PropTypes from 'prop-types'; 
// Flow
// TypeScript


function Card(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>{props.price}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    price: PropTypes.number,
}


Card.defaultProps = {
    title: "Название отстутствует",
    content: "Контент отсутствует",
    price: "?",
}

export default Card;