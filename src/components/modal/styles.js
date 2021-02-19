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
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 10px;
    object-fit: contain;

    &.show {
        display: flex;
    }

    &.hide {
        display: none;
    }
`