import styled from 'styled-components';
const MapWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    position:relative;
    & > div{
        background-color:${({theme}) => theme.colors.page.buttons};
        border-radius:1.5rem;
        height:90%;
        left:50%;
        padding:.25rem;
        position:absolute;
        top:5rem;
        transform:translateX(-50%);
        width:90%;
        & > iframe{
            border-radius:1.5rem;
            height:100%;
            object-fit:cover;
            object-position:center;
            width:100%;
        }
    }
    @media only screen and (max-width:850px){
        position:relative;
        height:25rem;
    }
`
export default MapWrapper;