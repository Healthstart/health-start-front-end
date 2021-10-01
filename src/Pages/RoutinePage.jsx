import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Page } from '../Atomic/Background';
import RoutinTImerIcon from '../Image/RoutinTimerIcon.png';

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
    width: 65vw;
    height: 600px;

    display: flex;
    background-color: #8d8d8d;
`;

const TimerSection = styled.div`
    width: 30%;
    height: 95%;

    margin: 0 auto;
    background-color: #db8484;
    margin-top:10px;

    border-radius: 10px;
`;
const RoutineSection = styled.div`
    width: 70%;
    height: 95%;

    background-color: #3e6df0;
    margin-top:10px;

    border-radius: 10px
`;

const TimerIcon = styled.img`
    width: 110px;
    opacity: 0.8;
`;

const RoutinePage = ({ mm, ss }) => {
    const [minutes, setMinutes] = useState(parseInt(2));
    const [seconds, setSeconds] = useState(parseInt(0));

    useEffect(() => {
        console.log('마ㅏ');
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
    }, [minutes, seconds]);

    return (
        <Page>
            <TitleTopWrap>
                <TitleTop>루틴 이름 CUTSTOM</TitleTop>
            </TitleTopWrap>

            <ContentWrap>
                <TimerSection>
                    <TimerIcon src={RoutinTImerIcon} />
                    <h4>
                        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                        
                    </h4>
                    <h5>UseEffect 커스텀 타이머 적용</h5>
                </TimerSection>
                <RoutineSection>
                    <h5>Current and Next Routin Page 작업 섹션 Animte.css / motoin framer dependency</h5>
                </RoutineSection>
            </ContentWrap>

        </Page>
    );
};

export default RoutinePage;
