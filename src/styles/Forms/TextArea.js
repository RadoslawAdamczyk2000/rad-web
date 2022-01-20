import React from 'react';
import styled from 'styled-components';

const TextArea = ({name, placeholder, title}) => {
    return(
        <div>
            <label htmlFor={name}>
                {title}
            </label>
            <textarea id={name} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default TextArea;