import React from 'react';
import Input from '../../../styles/Forms/Input'
import Options from '../../../styles/Forms/Options'
import Submit from '../../../styles/Forms/Submit'
import TextArea from '../../../styles/Forms/TextArea'

const Form = ({isAnalytics, isSeo, isWebsite}) => {
    return(
        <>
            {
                isAnalytics &&
                <form>
                    <div>
                        <Input type='text' placeholder='imię' name='firstname' title='Imię'/>
                        <Input type='text' placeholder='nazwisko' name='lastname' title='Nazwisko'/>
                        <Input type='email' placeholder='e-mail' name='mail' title='Adres e-mail'/>
                        <Input type='tel' placeholder='telefon' name='phone' title='Numer telefonu'/>
                        <Input type='number' placeholder='fundusz' name='price' title='Dostępne zasoby'/>
                        <Options isAnalytics/>
                        <TextArea placeholder='wiadomość' name='message' title='Wiadomość'/>
                    </div>
                    <Submit/>
                </form>
            }
            {
                isSeo &&
                <form>
                    <div>
                        <Input type='text' placeholder='imię' name='firstname' title='Imię'/>
                        <Input type='text' placeholder='nazwisko' name='lastname' title='Nazwisko'/>
                        <Input type='email' placeholder='e-mail' name='mail' title='Adres e-mail'/>
                        <Input type='tel' placeholder='telefon' name='phone' title='Numer telefonu'/>
                        <Input type='number' placeholder='fundusz' name='price' title='Dostępne zasoby'/>
                        <Options isSeo/>
                        <TextArea placeholder='wiadomość' name='message' title='Wiadomość'/>
                    </div>
                    <Submit/>
                </form>
            }
            {
                isWebsite &&
                <form>
                    <div>
                        <Input type='text' placeholder='imię' name='firstname' title='Imię'/>
                        <Input type='text' placeholder='nazwisko' name='lastname' title='Nazwisko'/>
                        <Input type='email' placeholder='e-mail' name='mail' title='Adres e-mail'/>
                        <Input type='tel' placeholder='telefon' name='phone' title='Numer telefonu'/>
                        <Input type='number' placeholder='fundusz' name='price' title='Dostępne zasoby'/>
                        <Options isWebsite/>
                        <TextArea placeholder='wiadomość' name='message' title='Wiadomość'/>
                    </div>
                    <Submit/>
                </form>
            }
        </>
    )
}

export default Form;