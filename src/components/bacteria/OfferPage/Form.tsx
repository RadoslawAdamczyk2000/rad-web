import React from 'react';
import FormArea from '../../atom/OfferPage/FormArea';
import FormButton from '../../atom/OfferPage/FormButton';
import FormInput from '../../atom/OfferPage/FormInput';
import FormWrapper from './styles/FormWrapper';
const Form = ({redirect}:{redirect:string}) => {
    return(
        <FormWrapper 
            id="contactform" 
            action="https://formsubmit.io/send/radoslawadamczyk2000@gmail.com" 
            method="POST"
        >
              <input name="_redirect" type="hidden" id="name" value={redirect}/>
            <input name="_formsubmit_id" type="text" style={{display:'none'}}/>
            <FormInput
                inputId='fullname'
                inputName='Imię i nazwisko - oferta:'
                title='Imię i nazwisko'
                inputType='text'
            />
            <FormInput
                inputId='email'
                inputName='E-mail - oferta:'
                title='E-mail'
                inputType='email'
            />
            <FormInput
                inputId='phone'
                inputName='Telefon - oferta:'
                title='Telefon'
                inputType='tel'
            />
            <FormInput
                inputId='balance'
                inputName='Budżet - oferta:'
                title='Budżet'
                inputType='number'
            />
            <FormArea
                inputId='message'
                inputName='Wiadomość - oferta:'
                title='Wiadomość'
            />
            <FormButton/>
        </FormWrapper>
    )
}
export default Form;