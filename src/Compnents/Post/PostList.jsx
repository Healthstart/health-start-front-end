import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Api from '../../Api';
import { Trash2 } from 'react-feather';
import toast from 'react-hot-toast';

const ListAnimate = keyframes`
    0% {
        transform: translateY(1600px);
    }
    100% {
        transform: translateY(0);
    }
`;

const Container = styled.div`
    height: 100%;

    animation: ${ListAnimate} 1.8s;
`;

const Post = styled.div`
    position: relative;
    margin-bottom: 3vh;
    padding: 0 1rem 2rem 0;

    & h3 {
        margin-bottom: -0.2rem;
    }
    & span {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 12px;
        opacity: 0.8;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 40%;
        width: 20%;
        height: 0.5px;
        background-color: rgba(120, 120, 120, 0.6);
    }
    &:last-child::after {
        background: none;
    }
`;

const DelBtn = styled.button`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: absolute;
    top: 0.2rem;
    right: 1rem;
    background: none;
    border: none;
    opacity: 0.85;
    cursor: pointer;
    transition: all 150ms ease-in-out;
    &:hover {
        opacity: 1;
        transform: scale(1.05);

        & svg {
            stroke: salmon;
        }
    }
`;

const PostList = ({ email, fetchData, posts }) => {
    const onClickDel = (id) => {
        Api.delete(`/post/${id}`).then(
            (data) => {
                toast.success(data.data.success);
                fetchData();
            },
            (err) => {
                toast.error(err.response.data.error);
            }
        );
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Container>
            {posts.map((x) => (
                <Post key={x.id}>
                    <h3>{x.title}</h3>
                    <span>{x.poster}</span>
                    <p>{x.content}</p>
                    <DelBtn onClick={() => onClickDel(x.id)} visible={x.poster === email}>
                        <Trash2 size={20} color="gray" />
                    </DelBtn>
                </Post>
            ))}
        </Container>
    );
};

export default PostList;
