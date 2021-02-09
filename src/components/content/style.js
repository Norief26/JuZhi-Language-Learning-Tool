import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color: #F9FAFC;
`
export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ fitScreen }) => fitScreen && `height: 100vh`};

    background: ${({ gradient, src}) => (gradient ? 
        `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url(${src}) center / cover` 
        : `url(${src}) bottom / cover`)};
    
    /* > * {
        &:first-child {
            width: 1580px;
        }
    } */
`