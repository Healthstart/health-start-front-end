import React from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { Heading2 } from '../../Atomic/Heading';
import { RoutinButton } from '../../Atomic/Buttons';
import Api from '../../Api';

const Preview = styled.div`
    padding: 1rem;

    & h2 {
        margin-bottom: 2rem;
    }
    & button {
        margin-top: 2rem;
    }
`;
const PostPreview = ({ inputState, initialState, fetchData }) => {
    const [{ title, poster, content }, setInputs] = inputState;

    const onClickSubmit = () => {
        if (title.trim() === '' || poster.trim() === '' || content.trim() === '') {
            toast.error('공백이 있거나 권한이 없습니다!');
            return;
        }

        Api.post('/post', { title, content }).then(
            (data) => {
                toast.success('성공적으로 포스트를 작성했습니다!');
                setInputs((prevState) => initialState);
                fetchData();
            },
            (err) => {
                toast.error(err.response.data.error);
                return;
            }
        );
    };

    return (
        <Preview>
            <Heading2>미리보기</Heading2>
            <h3>{title}</h3>
            <span>{poster}</span>
            <p>{content}</p>

            <RoutinButton onClick={onClickSubmit}>완료</RoutinButton>
        </Preview>
    );
};

export default PostPreview;
