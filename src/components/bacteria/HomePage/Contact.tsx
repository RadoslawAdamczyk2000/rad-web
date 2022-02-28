import React from 'react';
import Button from '../../atom/HomePage/Button';
import Text from '../../atom/HomePage/Text';
import TitleSection from '../../atom/HomePage/TitleSection';
import ContactWrapper from './styles/ContactWrapper';
const Contact = () => {
    return(
        <ContactWrapper>
            <TitleSection title='Kontakt'/>
            <Text>
                Jeśli zaintrygowała Ciebie moja osoba i oferta, to zapraszam do kontaktu. Na pewno ustalimy kompromisowe rozwiązanie. Postaw na uczciwość i profesjonalizm.
            </Text>
            <Button
                center={true}
                path='/contact'
                title='Napisz !'
            />
        </ContactWrapper>
    )
}
export default Contact;