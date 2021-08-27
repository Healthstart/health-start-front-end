import React, { useState } from 'react';
import styled from 'styled-components';
import { InputForm, LabelForm } from '../../Atomic/Form';
import { Blank } from '../../Atomic/Blank';
import { Heading3 } from '../../Atomic/Heading';
import { RowButton2 } from '../../Atomic/Buttons';
import toast from 'react-hot-toast';

const Container = styled.form`
    z-index: 10;
    display: flex;
    background-color: #eee;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 100%;
`;

const Login = () => {
    const initialState = {
        email: '',
        password: '',
    };
    const [loginState, setLoginState] = useState(initialState);
    const { email, password } = loginState;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setLoginState((prevState) => ({ ...loginState, [name]: value }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            toast.error('이메일 혹은 비밀번호가 공백입니다!');
            return;
        }
        console.log('submit to data', loginState);

        /* API Place */

        setLoginState((prevState) => initialState);
        toast.success('[로그인 성공 메세지]');
    };

    return (
        <Container onSubmit={(e) => handleOnSubmit(e)}>
            <Heading3 fSize={32} fWei={600} color="#565656">
                로그인
            </Heading3>

            <Blank h={2.5} />

            <LabelForm>아이디</LabelForm>
            <InputForm placeholder="Email Address" type="email" value={email} name="email" onChange={handleOnChange} />

            <Blank h={1.5} />

            <LabelForm>비밀번호</LabelForm>
            <InputForm placeholder="Password" type="password" value={password} name="password" onChange={handleOnChange} />

            <Blank h={3} />

            <RowButton2 type="submit">LOGIN</RowButton2>
        </Container>
    );
};

export default Login;
