import React from 'react';
import './Button.css'

const Button = ({handleClick, text, disabled, style}) => (
    <button className="button" style={style} onClick={handleClick} disabled={disabled}>{text}</button>
);

export default Button;
