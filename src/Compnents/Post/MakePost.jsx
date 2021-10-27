import React from 'react';
import styled from 'styled-components';
import { LabelForm } from '../../Atomic/Form';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
`;

const Input = styled.input`
    width: 80%;
    height: 5vh;
    font-size: 1rem;
    padding: 0 1.2rem;
    color: #565656;
    border: none;
    border-radius: 20rem;
    background: #efefef;
    outline: none;
    transition: all 0.3s ease-in-out;
    text-align: center;

    &:focus {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
    }
`;

const InputBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const CountText = styled.span`
    font-size: 12px;
    opacity: 0.8;
    margin-top: 0.4rem;
`;

const MakePost = ({ inputState }) => {
    const [inputs, setInputs] = inputState;

    const onInputChange = (e, key) => {
        const { value } = e.target;
        if (key === 'title' && value.length > 25) {
            return;
        }

        if (key === 'content' && value.length > 50) {
            return;
        }

        setInputs((prevState) => ({ ...prevState, [key]: e.target.value }));
    };

    return (
        <Container>
            <InputBox>
                <LabelForm>제목(최대25자)</LabelForm>
                <Input placeholder="Input Title" onChange={(e) => onInputChange(e, 'title')} value={inputs.title} />
                <CountText>{inputs.title.length} / 25</CountText>
            </InputBox>

            <InputBox>
                <LabelForm>내용(최대50자)</LabelForm>
                <Input placeholder="Input Content" onChange={(e) => onInputChange(e, 'content')} value={inputs.content} />
                <CountText>{inputs.content.length} / 50</CountText>
            </InputBox>
        </Container>
    );
};

export default MakePost;
