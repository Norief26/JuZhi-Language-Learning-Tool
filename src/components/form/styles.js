import styled from 'styled-components/macro'

export const Button = styled.button`
    font-size: 16px;
    color: #ffffff;
    padding: 8px;
    background-color: #88AF65;
    border: none;

    &:hover {
        background-color: #8fb76a;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 450px;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 1px 6px #777777;

    ${({ isMobile }) => isMobile && `width: 100%; height: 100%;`};

    @media (max-width: 500px) {
        /* width: 350px; */
    }
`

export const Divider = styled.hr`
    color: lightgray;
    width: 80%;
    max-width: 600px;
    /* margin-top: 10px; */
    /* margin-bottom: 20px; */

    @media (max-height: 500px) {
        /* display: none; */
        /* margin-bottom: 10px */
    }
`

export const Error = styled.span`
    color: #ffffff;
    /* height: 0px; */
    font-size: 16px;
    padding: 8px;
    background-color: #E87C03;
    border-radius: 5px;

    @media (max-height: 500px) {
        padding: 4px;
    }
`

export const Frame = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    max-width: 500px;

    button, input, span {
        margin-bottom: 18px;

        @media (max-height: 500px) {
            margin-bottom: 4px
        }
    }
`

export const Google = styled.div`
    background: url('../images/google_normal.png') no-repeat;
    height: 56px;
    width: 230px;
    margin-bottom: 10px;
    background-size: contain;

    &:active {
        background: url('../images/google_pressed.png') no-repeat;
        background-size: contain;
    }
`

export const Logo = styled.img`
    width: 100%;
    height: 64px;
    margin: 20px 0px;
    object-fit: contain;

    &:hover {
        opacity: 0.9;
    }

    @media (max-height: 500px) {
        height: 48px;
        margin: 10px 0px;
    }
`

export const Input = styled.input`
    font-size: 16px;
    padding: 8px;

    @media (max-height: 500px) {
        padding: 4px;
    }
`

export const Text = styled.span`
    font-size: 16px;
    margin: 5px 0px;

    a {
        padding: 5px;
        font-weight: bold;
        text-decoration: none;
        color: #88AF65;
    }
`