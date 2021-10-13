import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from '../Compnents/Login';
import Register from '../Compnents/Register';
import Preview from '../Compnents/Preview';
import Api from '../Api';

const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    width: 100vw;
    height: 100vh;
    box-shadow: 15px 15px 35px #807c7c, -15px -15px 35px #ffffff;
`;

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65vw;
    height: 100%;
    padding: 5rem;
`;

const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [routins, setRoutins] = useState([]);
    const [sortingRoutins, setSortingRoutins] = useState([]);

    const fetchRoutin = useCallback(async () => {
        const data = await Api.get('/lutin/alluser');
        const sortingData = await Api.get('/lutin/alluser/order');
        setRoutins((prevState) => data.data.data.slice(0, 8));
        setSortingRoutins((prevState) => sortingData.data.data.slice(0, 8));
    }, []);

    useEffect(() => {
        fetchRoutin();
    }, [fetchRoutin]);

    return (
        <Container>
            <Login setIsOpen={setIsOpen} />

            <FlexBox>
                <Preview routins={sortingRoutins} title="인기 루틴" />
                <Preview routins={routins} title="최신 루틴" />
            </FlexBox>

            <Register isOpen={isOpen} setIsOpen={setIsOpen} />
        </Container>
    );
};

export default LoginPage;
