import React, { useEffect, useRef } from 'react'
import { Background, Container, Title } from './styles'

function Modal({ children, modal, setModal, title, ...props}) {
    const ref = useRef(null)

    const closeModal = (e) => {
        if ((ref.current === e.target)) {
            setModal(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeModal, false)
        return () => {
            document.removeEventListener('click', closeModal, false)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Background className={modal ? 'show' : 'hide'} ref={ref}>
            <Container {...props} className={modal ? 'show' : 'hide'}>
                { title && <Title>{title}</Title>}
                {children}
            </Container>
        </Background>
    )
}

export default Modal