import styled, { css } from 'styled-components';
const SectionImageWrapper = styled.figure`
    align-items:center;
    display:flex;
    justify-content:end;
    height:30rem;
    margin:2rem auto;
    & > img{
        height:100%;
        object-fit:contain;
        max-width:95%;
    }
    ${({center}) => center && css`justify-content:center;`}
    ${({end}) => end && css`justify-content:end;`}
    ${({start}) => start && css`justify-content:start;`}
`
export default SectionImageWrapper;