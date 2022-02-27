import styled from 'styled-components';
const ContactListWrapper = styled.address`
    align-items:center;
    display:flex;
    flex-direction:column;
    font-style:normal;
    justify-content:center;
    row-gap:3rem;
    @media only screen and (max-width:850px){
        height:15rem;
    }
`
export default ContactListWrapper;