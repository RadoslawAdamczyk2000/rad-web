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
                <FormWrapper action="https://formsubmit.co/radoslaw.adamczyk2000@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="Formularz ofertowy analityk"/>
                    <input type="hidden" name="_next" rek='redirect' value="https://rad-web.vercel.app/offer/analytics"/>
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
                        <input type="hidden" name="_template" value="table"/>
                    </div>
                    <Submit/>
                </FormWrapper>
            }
            {
                isSeo &&
                <FormWrapper action="https://formsubmit.co/radoslaw.adamczyk2000@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="Formularz ofertowy seo"/>
                    <input type="hidden" name="_next" rek='redirect' value="https://rad-web.vercel.app/offer/seo"/>
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
                        <input type="hidden" name="_template" value="table"/>
                    </div>
                    <Submit/>
                </FormWrapper>
            }
            {
                isWebsite &&
                <FormWrapper action="https://formsubmit.co/radoslaw.adamczyk2000@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="Formularz ofertowy www"/>
                    <input type="hidden" name="_next" rek='redirect' value="https://rad-web.vercel.app/offer/www"/>
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
                        <input type="hidden" name="_template" value="table"/>
                    </div>
                    <Submit/>
                </FormWrapper>
            }
        </>
    )
}

export default Form;