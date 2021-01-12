import React from 'react';
import styled from 'styled-components';

export default function Modal(props) {
    return (
        <StyledModal1>
            <div className='modal__title'>
                <h1>Modal Title</h1>
            </div>
            <div className='modal__body'>
                <h4>Modal Body</h4>
            </div>
            <button onClick={() => props.setIsOpen(!props.isOpen)}>
                CLOSE
            </button>
        </StyledModal1>
    );
}

const StyledModal1 = styled.div`
    border: transparent;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    z-index: 999;
    margin: 100px 50px;
`;
