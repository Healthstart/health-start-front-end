import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import Api from '../../Api';

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

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = useCallback(async () => {
        const res = await Api.get('/post');
        const { data } = res.data;
        setPosts((prevState) => (data.length >= 50 ? data.length.slice(0, 50) : data));
    }, []);

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
                </Post>
            ))}
        </Container>
    );
};

export default PostList;
