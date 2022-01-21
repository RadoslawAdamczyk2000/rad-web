import React from 'react';
import Input from '../../../styles/Forms/Input'
import Options from '../../../styles/Forms/Options'
import Submit from '../../../styles/Forms/Submit'
import TextArea from '../../../styles/Forms/TextArea'
import InputGroup from '../../../styles/Forms/InputGroup'
import FormWrapper from '../../../styles/Forms/FormWrapper';


const Form = ({isAnalytics, isSeo, isWebsite}) => {
    return(
        <>
            {
                isAnalytics &&
                <FormWrapper>
                    <div>
                        <InputGroup>
                            <Input type='text' placeholder='imię' name='firstname' title='Imię'/>
                            <Input type='text' placeholder='nazwisko' name='lastname' title='Nazwisko'/>
                        </InputGroup>
                        <InputGroup>
                            <Input type='email' placeholder='e-mail' name='mail' title='Adres e-mail'/>
                            <Input type='tel' placeholder='telefon' name='phone' title='Numer telefonu'/>
                        </InputGroup>
                        <InputGroup>
                            <Input type='number' placeholder='fundusz' name='price' title='Dostępne zasoby'/>
                            <Options isAnalytics/>
                        </InputGroup>
                        <TextArea placeholder='wiadomość' name='message' title='Wiadomość'/>
                    </div>
                    <Submit/>
                </FormWrapper>
            }
            {
                isSeo &&
                <FormWrapper>
                    <div>
                    <InputGroup>
                            <Input type='text' placeholder='imię' name='firstname' title='Imię'/>
                            <Input type='text' placeholder='nazwisko' name='lastname' title='Nazwisko'/>
                        </InputGroup>
                        <InputGroup>
                            <Input type='email' placeholder='e-mail' name='mail' title='Adres e-mail'/>
                            <Input type='tel' placeholder='telefon' name='phone' title='Numer telefonu'/>
                        </InputGroup>
                        <InputGroup>
                            <Input type='number' placeholder='fundusz' name='price' title='Dostępne zasoby'/>
                            <Options isSeo/>
                        </InputGroup>
                        <TextArea placeholder='wiadomość' name='message' title='Wiadomość'/>
                    </div>
                    <Submit/>
                </FormWrapper>
            }
            {
                isWebsite &&
                <FormWrapper>
                    <div>
                        <InputGroup>
                            <Input type='text' placeholder='imię' name='firstname' title='Imię'/>
                            <Input type='text' placeholder='nazwisko' name='lastname' title='Nazwisko'/>
                        </InputGroup>
                        <InputGroup>
                            <Input type='email' placeholder='e-mail' name='mail' title='Adres e-mail'/>
                            <Input type='tel' placeholder='telefon' name='phone' title='Numer telefonu'/>
                        </InputGroup>
                        <InputGroup>
                        <Input type='number' placeholder='fundusz' name='price' title='Dostępne zasoby'/>
                            <Options isWebsite/>
                        </InputGroup>
                        <TextArea placeholder='wiadomość' name='message' title='Wiadomość'/>
                    </div>
                    <Submit/>
                </FormWrapper>
            }
        </>
    )
}

export default Form;