import styled, { keyframes } from 'styled-components';

const BGgradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const Background = styled.div`
    position: fixed;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;

    animation: ${BGgradient} 15s ease infinite;
`;

export const Dashboard = styled.div`
    position: relative;
    display: flex;
    width: 90vw;
    height: 90vh;
    margin: 0 auto;
    padding: 1rem;

    z-index: 0;

    background-color: #f6f7f9;
    border-radius: 35px;
`;

export const Page = styled.div`
    position: relative;
    width: 80%;
    height: 100%;

    padding: 2rem;
`;

export const Card = styled.div`
    align-self: center;

    cursor: pointer;

    width: 30vw;
    height: 80vh;

    -webkit-box-shadow: 21px 0px 42px -8px rgba(0, 0, 0, 0.03);
    box-shadow: 21px 0px 42px -8px rgba(0, 0, 0, 0.05);

    background-color: #fcfcfc;

    border: 1.3px solid #e6e6e6;
    border-radius: 20px;

    transition: 0.3s;
    &:hover {
        transform: translateY(-2px) scale(1.01);
        -webkit-box-shadow: 21px 0px 42px -8px rgba(0, 0, 0, 0.1);
        box-shadow: 21px 0px 42px -8px rgba(0, 0, 0, 0.1);
    }
`;
