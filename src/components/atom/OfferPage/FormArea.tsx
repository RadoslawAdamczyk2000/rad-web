import React from 'react';
interface IformArea {
    inputId : string,
    inputName : string,
    title : string
}
const FormArea = ({inputId,inputName,title}:IformArea) => {
    return(
        <div>
            <label htmlFor={inputId}>
                {title}
            </label>
            <textarea 
                name={inputName}
                id={inputId} 
            />
        </div>
    )
}
export default FormArea;