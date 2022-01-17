import React from 'react';
import ButtonPage from '../../../styles/Buttons/ButtonPage';
import ContactSectionWrapper from '../../../styles/Containers/ContactSectionWrapper';
import Text from '../../../styles/Text/Text';
import TitleSection from '../../../styles/Titles/TitleSection';

const Contact = () => {
    return(
        <ContactSectionWrapper>
            <TitleSection isCenter isHeading>
                Kontakt
            </TitleSection>
            <Text>
                Jeśli zaintrygowała Ciebie moja osoba i oferta, to zapraszam do kontaktu. Na pewno ustalimy kompromisowe rozwiązanie.
            </Text>
            <div>
                <ButtonPage>
                    Napisz!
                </ButtonPage>
            </div>
        </ContactSectionWrapper>
    )
}

export default Contact;