import styled from 'styled-components';

const InputGroup = styled.div`
    display:grid;
    grid-template-columns:repeat(${({columns}) => columns ? columns : '2,1fr'});
    grid-column-gap:.75rem;

    @media only screen and (max-width:950px){
        display:flex;
        flex-direction:column;
        grid-template-columns:repeat(1,1fr);
    }
`

export default InputGroup;