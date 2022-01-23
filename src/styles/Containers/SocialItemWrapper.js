import styled from 'styled-components';

const SocialItemWrapper = styled.li`
    align-items:center;
    color:${({isArticle, theme}) => isArticle ?  theme.colors.article.background : theme.colors.article.text};
    display:flex;
    flex-shrink:0;
    height:4rem;
    justify-content:center;
    width:4rem;

    & > a{
        align-items:center;
        display:flex;
        font-size:2.7rem;
        height:100%;
        justify-content:center;
        transition:.12s linear color;
        width:100%;

        &:hover{
            color:${({theme}) => theme.colors.page.buttons};
        }
    }
`

export default SocialItemWrapper;