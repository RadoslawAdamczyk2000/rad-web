import React from 'react';
import FormArea from '../../atom/OfferPage/FormArea';
import FormButton from '../../atom/OfferPage/FormButton';
import FormInput from '../../atom/ContactPage/FormInput';
import FormWrapper from './styles/FormWrapper';
const Form = () => {
    return(
        <FormWrapper>
            <FormInput
                inputId='fullname'
                inputName='fullname'
                title='Imię i nazwisko'
                inputType='text'
            />
            <FormInput
                inputId='email'
                inputName='email'
                title='E-mail'
                inputType='email'
            />
            <FormInput
                inputId='phone'
                inputName='phone'
                title='Telefon'
                inputType='tel'
            />
            <FormArea
                inputId='message'
                inputName='message'
                title='Wiadomość'
            />
            <FormButton/>
        </FormWrapper>
    )
}
export default Form;