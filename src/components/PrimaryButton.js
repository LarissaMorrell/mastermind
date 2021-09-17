import React from 'react';
import './Button.css'

const Button = ({handleClick, text, style}) => (
    <button className="button" style={style} onClick={handleClick}>{text}</button>
);

export default Button;
