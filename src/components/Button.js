import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', onClick, ...props }) => {
  if (to) {
    return (
      <StyledLink to={to} variant={variant} {...props}>
        {children}
      </StyledLink>
    );
  }
  
  return (
    <StyledButton variant={variant} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

const buttonStyles = `
  display: inline-block;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 10px;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const StyledButton = styled.button`
  ${buttonStyles}
  background: ${({ variant, theme }) => 
    variant === 'primary' 
      ? `linear-gradient(to right, ${theme.colors.accentCyan}, ${theme.colors.accentPurple})` 
      : 'transparent'};
  color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.white : theme.colors.white};
  border: ${({ variant, theme }) => 
    variant === 'primary' ? 'none' : `2px solid ${theme.colors.accentCyan}`};
  box-shadow: ${({ variant, theme }) => 
    variant === 'primary' ? '0 4px 15px rgba(0, 191, 255, 0.3)' : 'none'};
    
  &:hover {
    box-shadow: ${({ variant, theme }) => 
      variant === 'primary' ? '0 8px 20px rgba(0, 191, 255, 0.5)' : 'none'};
    background: ${({ variant, theme }) => 
      variant === 'primary' 
        ? `linear-gradient(to right, ${theme.colors.accentCyan}, ${theme.colors.accentPurple})` 
        : 'rgba(0, 191, 255, 0.1)'};
  }
`;

const StyledLink = styled(Link)`
  ${buttonStyles}
  background: ${({ variant, theme }) => 
    variant === 'primary' 
      ? `linear-gradient(to right, ${theme.colors.accentCyan}, ${theme.colors.accentPurple})` 
      : 'transparent'};
  color: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.white : theme.colors.white};
  border: ${({ variant, theme }) => 
    variant === 'primary' ? 'none' : `2px solid ${theme.colors.accentCyan}`};
  box-shadow: ${({ variant, theme }) => 
    variant === 'primary' ? '0 4px 15px rgba(0, 191, 255, 0.3)' : 'none'};
    
  &:hover {
    box-shadow: ${({ variant, theme }) => 
      variant === 'primary' ? '0 8px 20px rgba(0, 191, 255, 0.5)' : 'none'};
    background: ${({ variant, theme }) => 
      variant === 'primary' 
        ? `linear-gradient(to right, ${theme.colors.accentCyan}, ${theme.colors.accentPurple})` 
        : 'rgba(0, 191, 255, 0.1)'};
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;

export default Button;