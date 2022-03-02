import Layout from '../../templates/Layout';
import React from 'react';
import Articles from '../../components/bacteria/BlogPage/Articles';
import Text from '../../components/atom/BlogPage/Text';
import TitlePage from '../../components/atom/BlogPage/TitlePage';
import HeadWrapper from '../../styles/Containers/HeadWrapper';

const BlogPage = ({data}) => {
    return(
        <Layout
            metaDescription='Szukasz ciekawostek o szeroko rozumianym internecie, programowaniu? A może szukasz ciekawostek historycznych lub o tym co się dzieje w moim życiu? W odpowiedzi na te pytania zapraszam do śledzenia bloga.'
            metaTitle='Blog o programowaniu, pozycjonowaniu, historii, stylu życia, Śrem, Poznań - RadWEB'
        >
            <div className='content'>
                <HeadWrapper>
                <TitlePage
                    title='Blog o SEO i WWW'
                />
                <Text>
                    HiT - historia i teraźniejszość - to idealna kwintensencja mojego osobistego blogu. Z tego segmentu serwisu poznasz głębiej tajniki stron internetowych oraz pozycjonowania. Ponadto dowiesz się tutaj wiele o historii, w szczególności o przeszłości Polski, o ważnych personach. A propo historii, możesz się w tym miejscu zaznajomić z moim ciągle rozwijającym się życiorysem. Jeśli Ciebie zaciekawiłem to nic innego mi nie zostaje jak zaprosić do lektury co do raz bardziej rozszerzanej biblioteki arytkułów. 
                </Text>
                </HeadWrapper>
            </div>
            <Articles/>
        </Layout>
    )
}
export default BlogPage;