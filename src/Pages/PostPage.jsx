import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Page } from '../Atomic/Background';
import PostList from '../Compnents/Post/PostList';
import MakePost from '../Compnents/Post/MakePost';
import PostPreview from '../Compnents/Post/PostPreview';
import useProfile from '../Hooks/useProfile';
import Api from '../Api';

const Container = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`;

const Section = styled.div`
    height: 100%;
    background-color: #fff;
    border-radius: 15px;
    padding: 2rem;
    color: #141414;
`;

const PostPage = () => {
    const { email } = useProfile().data.data;
    const initialState = { title: '', content: '', poster: email };
    const inputState = useState(initialState);
    const [posts, setPosts] = useState([]);

    const fetchData = useCallback(async () => {
        const res = await Api.get('/post');
        const { data } = res.data;
        setPosts((prevState) => (data.length >= 50 ? data.length.slice(0, 50) : data));
    }, []);

    return (
        <Page>
            <Container>
                <Section>
                    <MakePost inputState={inputState} />
                </Section>

                <Section>
                    <PostPreview inputState={inputState} initialState={initialState} fetchData={fetchData} />
                </Section>

                <Section style={{ overflowY: 'scroll', gridRow: '1/3', gridColumn: '2/3' }}>
                    <PostList email={email} fetchData={fetchData} posts={posts} />
                </Section>
            </Container>
        </Page>
    );
};

export default PostPage;
