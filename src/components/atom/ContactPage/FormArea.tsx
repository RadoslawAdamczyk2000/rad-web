import React from 'react';
import FormAreaWrapper from './styles/FormAreaWrapper';
interface IformArea {
    inputId : string,
    inputName : string,
    title : string
}
const FormArea = ({inputId,inputName,title}:IformArea) => {
    return(
        <FormAreaWrapper>
            <label htmlFor={inputId}>
                {title}
            </label>
            <textarea 
                name={inputName}
                id={inputId} 
            />
        </FormAreaWrapper>
    )
}
export default FormArea;