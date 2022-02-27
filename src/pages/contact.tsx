import Layout from '../templates/Layout';
import React from 'react';
import TitlePage from '../components/atom/ContactPage/TitlePage';
import Text from '../components/atom/ContactPage/Text';
import Contact from '../components/molecule/ContactPage/Contact';
import Form from '../components/bacteria/ContactPage/Form';
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
                <TitlePage 
                    title='Kontakt'
                />
                <Text>
                    Jestem osobą, której możesz powierzyć zadanie stworzenia oraz pozycjonowania stron internetowych. Man doświadczenie, z którego wiem, jak powinna wyglądać wzorowa strona zarówno dla użytkownika jak i robotów wyszukiwarek. Moimi znakami rozpoznawczymi są profesjonalizm, uczciwość, empatia oraz solidność.
                </Text>
            </div>
            <Contact/>
            <Form/>
        </Layout>
    )
}

export default ContactPage;