import styled from 'styled-components';

const ContactWrapper = styled.div`
    display:grid;
    grid-column-gap:1rem;
    grid-row-gap:1rem;
    grid-template-columns:repeat(2,1fr);

    @media only screen and (max-width:950px){
        grid-template-columns:repeat(1,1fr);
    }
`

export default ContactWrapper;