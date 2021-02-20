import styled from 'styled-components/macro'

export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0%;
    background: rgba(0,0,0,0.5);

    &.show {
        display: flex;
    }

    &.hide {
        display:none
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    width: fit-content;
    border: 3px solid #EAEAEA;
    object-fit: contain;

    ${({ column }) => ( column ? `flex-direction: column`: `flex-direction: row`)};

    &.show {
        display: flex;
    }

    &.hide {
        display: none;
    }
`

export const Title = styled.div`
    font-size: 20px;
    width: calc(100% - 16px);
    padding: 8px;
    background-color: #EAEAEA;
`