import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../Atomic/Background';
import PostList from '../Compnents/Post/PostList';
import MakePost from '../Compnents/Post/MakePost';
import PostPreview from '../Compnents/Post/PostPreview';
import useProfile from '../Hooks/useProfile';

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

    return (
        <Page>
            <Container>
                <Section>
                    <MakePost inputState={inputState} />
                </Section>

                <Section>
                    <PostPreview inputState={inputState} initialState={initialState} />
                </Section>

                <Section style={{ overflowY: 'scroll', gridRow: '1/3', gridColumn: '2/3' }}>
                    <PostList />
                </Section>
            </Container>
        </Page>
    );
};

export default PostPage;
