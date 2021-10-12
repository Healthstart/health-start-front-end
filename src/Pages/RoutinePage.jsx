import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Page } from '../Atomic/Background';
import RoutinTImerIcon from '../Image/RoutinTimerIcon.png';
import { motion } from 'framer-motion';
// import Api from "../Api";

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

    margin-top: 40px;
    display: flex;
`;

const TimerSection = styled.div`
    width: 25%;
    height: 95%;

    margin: 0 auto;
    margin-top: 10px;

    display: flex;
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
    }
`;

const RoutineSection = styled.div`
    width: 75%;
    height: 95%;

    margin-top: 10px;

    background-color: #cfcfcf;
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

    background-color: white;

    padding-left: 20px;
`;

const RoutineBox = styled(motion.div)`
    width: 280px;
    height: 350px;

    margin-right: 50px;
    align-self: center;

    background-color: #eee;
`;

const TimerIcon = styled.img`
    width: 110px;
    opacity: 0.6;

    display: block;
    margin: 0 auto;
`;

const RoutinePage = ({ mm, ss }) => {
    const [minutes, setMinutes] = useState(parseInt(2));
    const [seconds, setSeconds] = useState(parseInt(0));
    const [timerState, setTimerState] = useState(true);
    const [routine, setRoutine] = useState([
        {
            name: '스트레칭',
            count: 10,
        },
        {
            name: '스쿼트',
            count: 20,
        },
        {
            name: '오호호',
            count: 11,
        },
        {
            name: '무야호',
            count: 12,
        },
        {
            name: '응애',
            count: 13,
        },
        {
            name: '잏히',
            count: 14,
        },
        {
            name: '오렌지쥬스',
            count: 15,
        },
    ]);

    useEffect(() => {
        console.log('마ㅏ');
        if (timerState == false) {
            console.log('타이머 안 움직임');
        } else {
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
    }, [minutes, seconds]);

    const [RoutineStack, setRoutineStack] = useState(-1);
    const [isAnimate, setIsAnimate] = useState(false);

    const AnimatedPage = (index, name) => {
        if (index !== RoutineStack) {
            return <RoutineBox animate={{ x: isAnimate ? RoutineStack * -300 : 0 }}>{name}</RoutineBox>;
        }
        if (index === RoutineStack) {
            return <RoutineBox animate={{ x: isAnimate ? RoutineStack * -300 : 0, scale: isAnimate ? 1.2 : 1 }}>{name}</RoutineBox>;
        }
    };

    const RoutineList = routine.map((routine, index) => AnimatedPage(index, routine.name));

    const Effeted = () => {
        // setRoutine(routine.filter((testroutine, index) => index != RoutineStack ? testroutine : null))
        setIsAnimate(true);
        setRoutineStack(RoutineStack + 1);

        console.log(routine);
        console.log(RoutineStack);
        console.log(isAnimate);
    };

    return (
        <Page>
            <TitleTopWrap>
                <TitleTop>루틴 이름 CUTSTOM</TitleTop>
            </TitleTopWrap>

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
                    <RoutineCenter>
                        {RoutineList}
                        <RoutineBox></RoutineBox>
                    </RoutineCenter>
                </RoutineSection>
            </ContentWrap>
        </Page>
    );
};

export default RoutinePage;
