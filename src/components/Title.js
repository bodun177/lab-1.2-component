import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: #2c7be5;
    font-family: Arial, sans-serif;
    text-align: center;
`;

function Title({ children }) {
    return <StyledTitle>{children}</StyledTitle>;
}

export default Title;