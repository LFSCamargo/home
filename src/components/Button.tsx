import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border-radius: 100px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.primary};
`;

interface Props {
  onClick?: any;
  title: string,
}

const Button = ({ onClick, title }: Props) => (
  <Wrapper onClick={onClick}>
    {title}
  </Wrapper>
);

export default Button;