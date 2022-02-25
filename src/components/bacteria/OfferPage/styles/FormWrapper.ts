import styled from 'styled-components';
const FormWrapper = styled.form`
    align-items:center;
    display:flex;
    font-family:${({theme}) => theme.fonts.family.primary};
    flex-direction:column;
    justify-content:center;
    margin:8rem auto;
    row-gap:2rem;
`
export default FormWrapper;