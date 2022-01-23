import FormWrapper from '../../../styles/Forms/FormWrapper';
import Input from '../../../styles/Forms/Input';
import InputGroup from '../../../styles/Forms/InputGroup';
import React from 'react';
import Submit from '../../../styles/Forms/Submit';
import TextArea from '../../../styles/Forms/TextArea';

const Form = () => {

    return(
        <FormWrapper action="https://formsubmit.co/radoslaw.adamczyk2000@gmail.com" method="POST">
            <div>
                <input type="hidden" name="_subject" value="Formularz kontaktowy"/>
                <input type="hidden" name="_next" rek='redirect' value="https://rad-web.vercel.app/contact/"/>
                <InputGroup>
                    <Input type='text' placeholder='imię' name='firstname' title='Imię'/>
                    <Input type='text' placeholder='nazwisko' name='lastname' title='Nazwisko'/>
                </InputGroup>
                <InputGroup>
                    <Input type='email' placeholder='e-mail' name='mail' title='Adres e-mail'/>
                    <Input type='tel' placeholder='telefon' name='phone' title='Numer telefonu'/>
                </InputGroup>
                <TextArea placeholder='wiadomość' name='message' title='Wiadomość'/>
                <input type="hidden" name="_template" value="table"/>
            </div>
            <Submit id='sendButtonContactForm'/>
        </FormWrapper>
    )
}

export default Form;