import React from 'react';
import TitlePageWrapper from './styles/TitlePageWrapper';
const TitlePage = ({title}:{title:string}) => {
    return(
        <TitlePageWrapper>
            <h1>
                {title}
            </h1>
        </TitlePageWrapper>
    )
}
export default TitlePage;
