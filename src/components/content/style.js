import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EAEBE5;

    > * {
      &:first-child {
         margin-top: 20px;
      }
    }
`