import React from 'react';
import FormInputWrapper from './styles/FormInputWrapper';
interface IformInput {
    inputId : string,
    inputName : string,
    inputType ?: string,
    title : string
}
const FormInput = ({inputId,inputName,inputType='text',title}:IformInput) => {
    return(
        <FormInputWrapper>
            <label htmlFor={inputId}>
                {title}
            </label>
            <input 
                type={inputType} 
                name={inputName} 
                id={inputId} 
            />
        </FormInputWrapper>
    )
}
export default FormInput;