import React from 'react';
import { Button } from 'react-bootstrap';

const Buttons = ( {variant, title, onClick} ) =>{
    return(
        <Button variant={variant} onClick={onClick}>{title}</Button>
    )
}

export default Buttons