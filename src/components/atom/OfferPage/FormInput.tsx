import React from 'react';
interface IformInput {
    inputId : string,
    inputName : string,
    inputType ?: string,
    title : string
}
const FormInput = ({inputId,inputName,inputType='text',title}:IformInput) => {
    return(
        <div>
            <label htmlFor={inputId}>
                {title}
            </label>
            <input 
                type={inputType} 
                name={inputName} 
                id={inputId} 
            />
        </div>
    )
}
export default FormInput;