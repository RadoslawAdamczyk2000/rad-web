import React from 'react';
import styled from 'styled-components';

const Input = ({name, placeholder, title, type}) => {
    return(
        <div>
            <label htmlFor={name}>
                {title}
            </label>
            <input type={type} id={name} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default Input;