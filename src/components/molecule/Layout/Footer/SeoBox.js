import React from 'react';
import SeoBoxWrapper from '../../../../styles/Containers/SeoBoxWrapper';
import SeoItem from '../../../atoms/Layout/Footer/SeoItem';

const seoItems = {
    web:[
        'Strony internetowe Śrem',
        'Strony internetowe Poznań',
        'Strony internetowe Kościan',
        'Strony internetowe Środa Wielkopolska',
        'Strony internetowe Dolsk',
        'Strony internetowe Kórnik',
        'Strony internetowe Gostyń',
        'Strony internetowe Leszno'
    ],
    seo:[
        'Pozycjonowanie Śrem',
        'Pozycjonowanie Poznań',
        'Pozycjonowanie Kościan',
        'Pozycjonowanie Środa Wielkopolska',
        'Pozycjonowanie Dolsk',
        'Pozycjonowanie Kórnik',
        'Pozycjonowanie Gostyń',
        'Pozycjonowanie Leszno'
    ],
    analytics:[
        'Analityka stron Śrem',
        'Analityka stron Poznań',
        'Analityka stron Kościan',
        'Analityka stron Środa Wielkopolska',
        'Analityka stron Dolsk',
        'Analityka stron Kórnik',
        'Analityka stron Gostyń',
        'Analityka stron Leszno'
    ]
}

const SeoBox = () => {
    return(
        <SeoBoxWrapper>
            <ul>
                {
                    seoItems.web.map( i => <SeoItem>{i}</SeoItem>)
                }
            </ul>
            <ul>
                {
                    seoItems.seo.map( i => <SeoItem>{i}</SeoItem>)
                }
            </ul>
            <ul>
                {
                    seoItems.analytics.map( i => <SeoItem>{i}</SeoItem>)
                }
            </ul>
        </SeoBoxWrapper>
    )
}

export default SeoBox;