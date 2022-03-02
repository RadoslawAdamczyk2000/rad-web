import Layout from '../../templates/Layout';
import React from 'react';
import Projects from '../../components/bacteria/ProjectsPage/Projects';
import TitlePage from '../../components/atom/ProjectsPage/TitlePage';
import Text from '../../components/atom/ProjectsPage/Text';
import HeadWrapper from '../../styles/Containers/HeadWrapper';

const ProjectsPage = () => {
    return(
        <Layout
            metaDescription='Szukasz nowych realizacji oraz projektów zrealizowanych przeze mnie? Tu jest idealne miejsce.'
            metaTitle='Projekty stron i aplikacji www, SEO, Śrem, Poznań - RadWEB'
        >
            <div>
                <div className='content'>
                <HeadWrapper>
                    <TitlePage 
                        title='Projekty - strony i aplikacje internetowe'
                    />
                    <Text>
                        To jest sedno mojej pracy i rozwoju w tej branży. Znajdziesz tutaj prace wykonane na zlecenie oraz zrealizowane pod wpływem inspiracji. Wszystko realizowałem z wykorzystaniem topowych i rekomendowanych przez mądrzejszych technologii. Są to głównie strony internetowe, aplikacje oraz serwisy z systemami zarządzania treściami. To doświadczenie pozwoliło mi zdobyć wiedzę z użycia HTML'a, CSS'a, JavaScript'u, React'a, Gatsby'ego oraz PHP'a wraz z bazą danych MySQL. W czasach zamierzchłych, kiedy to uczyłem się w śremskim KPALO, miałem okazję zaznajomić się z C++ oraz z relacyjnymi bazami danych Access.
                    </Text>
                </HeadWrapper>
                </div>
                <Projects/>
            </div>
        </Layout>
    )
}
export default ProjectsPage;