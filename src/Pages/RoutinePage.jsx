import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Page } from '../Atomic/Background';
import RoutinTImerIcon from '../Image/RoutinTimerIcon.png';
import { motion } from 'framer-motion';
import SelectedRoutin from '../Compnents/Routins/SelectedRoutin';
import { StartAlert, EndAlert } from '../Compnents/Routins/Alert';

const TitleTopWrap = styled.div`
    width: 100%;
    height: 100px;

    border-radius: 30px;
`;

const TitleTop = styled.div`
    display: inline-block;
    height: 50px;

    padding: 0 20px 0 20px;
    margin-top: 25px;
    margin-left: 10px;

    font-weight: 600;
    background-color: #ececec;
    border-radius: 30px;

    text-align: center;
    line-height: 47px;
    color: #444444;
`;

const ContentWrap = styled.div`
    width: 100%;
    height: 600px;

    /* margin-left: 50px; */
    margin-top: 40px;
    display: flex;
`;

const TimerSection = styled.div`
    width: 29%;
    height: 95%;

    margin: 0 auto;
    margin-top: 10px;

    display: flex;

    border-right: 3px solid #eee;
`;

const TimerBox = styled.div`
    width: 150px;
    height: 250px;

    align-self: center;
    margin: 0 auto;
`;

const TimerText = styled.h3`
    font-size: 33px;
    color: #5f5f5f;
    margin-top: -12px;

    text-align: center;
`;

const TimerButton = styled.button`
    cursor: pointer;

    display: block;

    width: 80px;
    height: 35px;

    border-radius: 30px;
    border: 1px solid #2672ff;
    background-color: none;

    color: #2672ff;
    font-weight: 700;
    line-height: 35px;

    margin: 0 auto;
    margin-top: 10px;

    transition: 0.2s;
    &:hover {
        background-color: #2672ff;
        color: white;
    }
    &:active {
        transform: scale(1.03);
        background-color: coral;
        border: none;
    }
`;

const RoutineSection = styled.div`
    width: 71%;
    height: 95%;

    margin-top: 10px;

    /* background-color: #cfcfcf; */
    border-radius: 10px;

    display: flex;
    overflow: hidden;
`;

const RoutineCenter = styled.div`
    width: auto;
    height: 500px;

    align-self: center;
    display: flex;
    justify-content: space-around;

    /* background-color: white; */

    padding-left: 110px;
`;

const RoutineBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 280px;
    height: 350px;

    padding: 2rem;
    margin-right: 200px;
    align-self: center;

    border-radius: 30px;
    background-color: #eee;
`;

const TimerIcon = styled.img`
    width: 110px;
    opacity: 0.6;

    display: block;
    margin: 0 auto;
`;

const RoutinePage = ({ mm, ss }) => {
    const [RoutineStack, setRoutineStack] = useState(0);
    const [isAnimate, setIsAnimate] = useState(false);

    const [minutes, setMinutes] = useState(parseInt(1));
    const [seconds, setSeconds] = useState(parseInt(0));
    const [onTimer, setOnTimer] = useState(false);

    const isSelectState = useState(false);
    const selectedRoutinState = useState({ id: -1, content: [] });
    const routine = selectedRoutinState[0].content;

    useEffect(() => {
        if (onTimer) {
            const CountDown = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(parseInt(seconds) - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(CountDown);
                    } else {
                        setMinutes(parseInt(minutes) - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
            return () => clearInterval(CountDown);
        }
    }, [minutes, seconds, onTimer]);

    const AnimatedPage = (index, data) => {
        if (RoutineStack === 0) {
            if (index === 0)
                return (
                    <RoutineBox animate={{ scale: 1.3 }}>
                        <h3>{data.name}</h3>
                        <p>
                            {data.set}세트 / {data.count}회
                        </p>
                    </RoutineBox>
                );
            if (index !== 0)
                return (
                    <RoutineBox animate={{ scale: 1 }}>
                        <h3>{data.name}</h3>
                        <p>
                            {data.set}세트 / {data.count}회
                        </p>
                    </RoutineBox>
                );
        }
        if (index !== RoutineStack) {
            return (
                <RoutineBox animate={{ x: isAnimate ? RoutineStack * -480 : 0 }}>
                    <h3>{data.name}</h3>
                    <p>
                        {data.set}세트 / {data.count}회
                    </p>
                </RoutineBox>
            );
        }
        if (index === RoutineStack) {
            return (
                <RoutineBox animate={{ x: isAnimate ? RoutineStack * -480 : 0, scale: isAnimate ? 1.3 : 1 }}>
                    <h3>{data.name}</h3>
                    <p>
                        {data.set}세트 / {data.count}회
                    </p>
                </RoutineBox>
            );
        }
    };

    const RoutineList = routine.map((routine, index) => AnimatedPage(index, routine));

    const Effeted = () => {
        setIsAnimate(true);
        setRoutineStack(RoutineStack + 1);
        setMinutes(1);
        setSeconds(15);

        console.log(routine);
        console.log(RoutineStack);
        console.log(isAnimate);
    };

    return (
        <Page>
            <TitleTopWrap>
                <TitleTop>루틴 이름 CUTSTOM</TitleTop>
            </TitleTopWrap>

            <SelectedRoutin isSelectState={isSelectState} selectedRoutinState={selectedRoutinState} />

            <StartAlert isSelectState={isSelectState} selectedRoutinState={selectedRoutinState} timerState={[onTimer, setOnTimer]} />

            {routine.length <= RoutineStack && <EndAlert />}

            <ContentWrap>
                <TimerSection>
                    <TimerBox>
                        <TimerIcon src={RoutinTImerIcon} />
                        <TimerText>
                            {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                        </TimerText>
                        <TimerButton onClick={() => Effeted()}>완료</TimerButton>
                    </TimerBox>
                </TimerSection>

                <RoutineSection>
                    <RoutineCenter>{RoutineList}</RoutineCenter>
                </RoutineSection>
            </ContentWrap>
        </Page>
    );
};

export default RoutinePage;
