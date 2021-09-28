import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Page } from '../Atomic/Background';

const RoutinePage = ({ mm, ss }) => {
    const [minutes, setMinutes] = useState(parseInt(2));
    const [seconds, setSeconds] = useState(parseInt(0));

    useEffect(() => {
        console.log("마ㅏ");
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
            <h4>test</h4>
            <h4>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h4>
        </Page>
    );
};

export default RoutinePage;
