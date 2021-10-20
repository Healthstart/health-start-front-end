import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { RoutinButton } from '../../Atomic/Buttons';

const Container = styled(motion.div)`
    position: absolute;
    z-index: 20;

    width: 100%;
    height: 100%;

    background-color: #00000028;
    border-radius: 30px;

    top: 0;
    left: 0;

    backdrop-filter: blur(5px);
`;

const Content = styled(motion.div)`
    position: absolute;
    z-index: 30;

    width: 600px;
    height: 400px;

    background-color: #ebebeb;
    border-radius: 20px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StartAlert = ({ isSelectState, selectedRoutinState }) => {
    const [isSelect, setIsSelect] = isSelectState;
    const [isRealSelect, setIsRealSelect] = useState(false);
    const selectedRoutin = selectedRoutinState[0];

    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1, display: isRealSelect ? 'none' : 'block' }}>
            <Content
                initial={{ y: -1200, x: -300 }}
                animate={{ y: isRealSelect ? -1000 : isSelect ? -180 : 0, x: -300 }}
                transition={{
                    type: 'spring',
                    stiffness: 360,
                    damping: 30,
                }}
            >
                {selectedRoutin.content.map((x, i) => (
                    <div key={i}>
                        <h3>{x.name}</h3>
                    </div>
                ))}
                <RoutinButton onClick={() => setIsRealSelect((prevState) => true)}>완료</RoutinButton>
                <RoutinButton onClick={() => setIsSelect((prevState) => false)}>돌아가기</RoutinButton>
            </Content>
        </Container>
    );
};

const DownAnimate = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const EndAlertContent = styled(Content)`
    width: 800px;
    height: 200px;
`;

const EndAlertTextBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;

    text-align: center;
    font-size: 2rem;

    animation: ${DownAnimate} 2s;

    & > button {
        animation: ${DownAnimate} 4s;
    }
`;

export const EndAlert = () => {
    return (
        <Container>
            <EndAlertContent
                initial={{ y: -1200, x: -400 }}
                animate={{ y: -130 }}
                transition={{
                    type: 'spring',
                    stiffness: 360,
                    damping: 30,
                }}
            >
                <EndAlertTextBox>
                    축하합니다! <br />
                    모든 루틴을 완료하셨습니다!
                    <RoutinButton onClick={() => window.location.reload()}>처음으로</RoutinButton>
                </EndAlertTextBox>
            </EndAlertContent>
        </Container>
    );
};
