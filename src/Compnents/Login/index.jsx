import React from 'react';
import styled from 'styled-components';
import { InputForm, LabelForm } from '../../Atomic/Form';
import { Blank } from '../../Atomic/Blank';
import { Heading3 } from '../../Atomic/Heading';
import { RowButton2 } from '../../Atomic/Buttons';

const Container = styled.form`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 100%;
`;

const Login = () => {
    return (
        <Container>
            <Heading3 fSize={32} fWei={600} color="#565656">
                로그인
            </Heading3>

            <Blank h={2.5} />

            <LabelForm>아이디</LabelForm>
            <InputForm placeholder="Email Address" type="email" />

            <Blank h={1.5} />

            <LabelForm>비밀번호</LabelForm>
            <InputForm placeholder="Password" type="password" />

            <Blank h={3} />

            <RowButton2>LOGIN</RowButton2>
        </Container>
    );
};

export default Login;
