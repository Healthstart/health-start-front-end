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

const StyledLink = styled(Link)`
    text-decoration: underline;
`;

const PermissionPage = () => {
    return (
        <Container>
            <Content>
                <Heading1>권한이 없습니다.</Heading1>
                <Heading3>로그인이 필요합니다.</Heading3>
                <Heading3>
                    <StyledLink to="/login">로그인 하러가기</StyledLink>
                </Heading3>
            </Content>
        </Container>
    );
};

export default PermissionPage;
