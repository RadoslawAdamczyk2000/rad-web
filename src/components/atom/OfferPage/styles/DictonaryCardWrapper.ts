import styled from 'styled-components';
const DictonaryCardWrapper = styled.article`
    align-items:center;
    border:.25rem solid ${({theme}) => theme.colors.page.buttons};
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    min-height:15rem;
    justify-content:start;
    width:30rem;
    & > div:first-of-type{
        align-items:center;
        background-color:${({theme}) => theme.colors.page.buttons};
        color:${({theme}) => theme.colors.page.background};
        display:flex;
        font-size:2.3rem;
        font-weight:900;
        height:4rem;
        justify-content:center;
        width:100%;
    }
    & > div:last-of-type{
        align-items:center;
        color:${({theme}) => theme.colors.page.buttons};
        display:flex;
        font-weight:600;
        justify-content:center;
        min-height:calc(15rem - 4rem);
        padding:1.5rem;
        text-align:center;
    }
`
export default DictonaryCardWrapper;