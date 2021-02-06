import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color: #F9FAFC;
`
export const Group = styled.div`
    min-width: 500px;
    /* align-items: center; */
    /* justify-items: center; */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url(${({ src }) => (src)}) bottom / cover;

    /* > * {
        &:first-child {
            width: 1580px;
        }
    } */
`