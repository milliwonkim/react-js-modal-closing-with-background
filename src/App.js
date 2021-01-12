import React, { useState } from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import './App.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledApp>
            <button onClick={() => setIsOpen(!isOpen)}>OPEN</button>
            {isOpen && (
                <StyledBackground1 onClick={() => setIsOpen(!isOpen)}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </StyledBackground1>
            )}
        </StyledApp>
    );
}

export default App;

const StyledBackground1 = styled.div`
    top: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    z-index: 500;
`;

const StyledApp = styled.div`
    top: 0;
    position: relative;
    z-index: 1;
`;
