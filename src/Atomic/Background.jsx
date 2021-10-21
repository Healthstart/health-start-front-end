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
