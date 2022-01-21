import Layout from '../templates/Layout';
import React from 'react';
import TitlePage from '../styles/Titles/TitlePage';
import Text from '../styles/Text/Text';
import Form from '../components/atoms/ContactPage/Form';
import Info from '../components/atoms/ContactPage/Info';
import Map from '../components/atoms/ContactPage/Map';
import ContactWrapper from '../styles/Containers/ContactWrapper';

const ContactPage = () => {
    return(
        <Layout
            metaTitle='Kontakt ze specjalistą stron internetowych, seo i analityki, Śrem, Poznań - RadWEB'
            metaDescription='Zapraszam do kontaktu. Potrzebujesz pomocy w rozwoju, lub całkowicie nowej strony internetowej to jestem osobą której szukasz.'
        >
            <div
                style={{
                    margin:'5rem 0'
                }}
            >
                <TitlePage>
                    Kontakt
                </TitlePage>
                <Text>
                    Jestem osobą, której możesz powierzyć zadanie stworzenia oraz pozycjonowania stron internetowych. Man doświadczenie, z którego wiem, jak powinna wyglądać wzorowa strona zarówno dla użytkownika jak i robotów wyszukiwarek. Moimi znakami rozpoznawczymi są profesjonalizm, uczciwość, empatia oraz solidność.
                </Text>
            </div>
            <ContactWrapper>

                <div>
                    <Info/>
                </div>
                <div>   
                    <Map/>                    
                </div>

                <div>
                    <Form/>
                </div>
            </ContactWrapper>
        </Layout>
    )
}

export default ContactPage;