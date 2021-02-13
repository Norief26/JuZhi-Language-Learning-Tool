import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color: #F9FAFC;
`
export const Group = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ fitScreen }) => fitScreen && `height: 100vh`};
    ${({ headerOffset }) => headerOffset && `height: calc(100vh - 62px)`};

    background: ${({ gradient, src}) => (gradient ? 
        `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0)), url(${src}) center / cover` 
        : `url(${src}) bottom / cover`)};
`