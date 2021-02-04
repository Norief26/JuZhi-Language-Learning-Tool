import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    width: 1920px;
    height: 1080px;
    flex-direction: column;
    align-items: center;
    background-color: #EAEBE5;
`

export const Group = styled.div`
    margin-top: 24px;
    width: 1240px;
    height: 100vh;
    background: url(${({ src }) => (src)})
`