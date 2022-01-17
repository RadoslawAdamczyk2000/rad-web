import styled from 'styled-components';

const ContactSectionWrapper = styled.div`
    align-items:center;
    box-shadow:inset 0 0 2rem hsla( 0, 100%, 0%, .5);
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin:10rem auto;
    max-width:85vw;
    min-height:40rem;
    padding:5rem;
    position:relative;
    width:70rem;

    &::after{
        border-left:.5rem solid ${({theme}) => theme.colors.page.special};
        border-right:.5rem solid ${({theme}) => theme.colors.page.buttons};
        height:15rem;
        transform:skewY(25deg);
        width:100%;
    }

    &::before{
        border-bottom:.5rem solid ${({theme}) => theme.colors.page.special};
        border-top:.5rem solid ${({theme}) => theme.colors.page.buttons};
        height:100%;
        transform:skewX(60deg);
        width:15rem;
    }

    @media only screen and (max-width:900px){
        &::after,
        &::before{
            display:none;
        }
    }
`

export default ContactSectionWrapper;