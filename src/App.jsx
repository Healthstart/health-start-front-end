import React from 'react';
import { Blank } from './Atomic/Blank';
import { Heading1, Heading2, Heading3 } from './Atomic/Heading';
import { RowButton, RowButton2 ,CircleButton } from './Atomic/Buttons';

const App = () => {
    return (
        <div>
            <Heading1>제목1 Title1</Heading1>
            <Heading2>제목2 Title2</Heading2>
            <Heading3>제목3 Title3</Heading3>

            <RowButton>Row 버튼</RowButton>
            <Blank />
            <RowButton2>Row 버튼 2</RowButton2>
            <Blank />
            <CircleButton>X</CircleButton>
        </div>
    );
};

export default App;
