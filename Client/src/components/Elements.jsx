import React from 'react';
import styled from '@emotion/styled';

// Button 컴포넌트
export function Button({ color = 'default', size = '', onClick, children }) {
  return <StyledButton color={color} size={size} onClick={onClick}>{children}</StyledButton>;
}


// Input 컴포넌트
export function InputWrap({ children, length = 'default', size = '', ...props }) {
  return (

    <InputWrapLayout>
      {children}
    </InputWrapLayout>

  )
}

const StyledButton = styled.button`
    background-color: ${({ color }) => (color === 'gray' ? `var(--Gray-10)` : `var(--Main-color)`)};
    color: ${({ color }) => (color === 'gray' ? `var(--Gray-90)` : `var(--Gray-10)`)};
    height: ${({ size }) => (size === 'XL' ? '68px' : size === 'S' ? '36px' : size === 'M' ? '48px' : '56px')};
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
  `;


const InputWrapLayout = styled.div`

  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;


  & > input { width: 100%;
  max-width: ${({ length }) => (length === 'short' ? '230px' : '500px')};
  height: ${({ size }) => (size === 'S' ? '36px' : size === 'M' ? '48px' : size === 'XL' ? '68px' : '56px')};
  padding: 8px 24px;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid var(--Gray-20);
  }

  & > input:focus {
    outline: none;
    border: 1px solid var(--Gray-40);
  }

`;