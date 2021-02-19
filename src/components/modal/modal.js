import React, { useEffect, useRef } from 'react'
import { Background, Container } from './styles'

function Modal({ children, modal, setModal, ...props}) {
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
            <Container {...props} className={modal ? 'show' : 'hide'}>{children}</Container>
        </Background>
    )
}

export default Modal