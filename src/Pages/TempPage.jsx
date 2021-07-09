import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Heading1, Heading3 } from '../Atomic/Heading';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 600px;
    height: 300px;
    text-align: center;
`;

const Back = styled(Link)`
    text-decoration: underline;
`;

const TempPage = () => {
    return (
        <Container>
            <Content>
                <Heading1>아직 미구현된 페이지입니다.</Heading1>
                <Heading3>개발 진행 중</Heading3>
                <Heading3>
                    <Back to="/">뒤로가기</Back>
                </Heading3>
            </Content>
        </Container>
    );
};

export default TempPage;
