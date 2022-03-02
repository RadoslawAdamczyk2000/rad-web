import React from 'react';
import FormArea from '../../atom/OfferPage/FormArea';
import FormButton from '../../atom/OfferPage/FormButton';
import FormInput from '../../atom/ContactPage/FormInput';
import FormWrapper from './styles/FormWrapper';
const Form = () => {
    return(
        <FormWrapper
            id="contactform" 
            action="https://formsubmit.io/send/radoslawadamczyk2000@gmail.com" 
            method="POST"
        >
            <input name="_redirect" type="hidden" id="name" value='https://rad-web.vercel.app/contact'/>
            <input name="_formsubmit_id" type="text" style={{display:'none'}}/>
            <FormInput
                inputId='fullname'
                inputName='Imię i nazwisko - kontakt:'
                title='Imię i nazwisko'
                inputType='text'
            />
            <FormInput
                inputId='email'
                inputName='E-mail - kontakt :'
                title='E-mail'
                inputType='email'
            />
            <FormInput
                inputId='phone'
                inputName='Telefon - kontakt'
                title='Telefon'
                inputType='tel'
            />
            <FormArea
                inputId='message'
                inputName='Wiadomość - kontakt'
                title='Wiadomość'
            />
            <FormButton/>
        </FormWrapper>
    )
}
export default Form;