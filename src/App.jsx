import React from 'react';
import { Heading1, Heading2, Heading3 } from './Atomic/Heading';
import { RowButton, CircleButton } from './Atomic/Buttons';

const App = () => {
    return (
        <div>
            <Heading1>제목1 Title1</Heading1>
            <Heading2>제목2 Title2</Heading2>
            <Heading3>제목3 Title3</Heading3>

            <RowButton>Row 버튼</RowButton>
            <CircleButton>X</CircleButton>
        </div>
    );
};

export default App;
