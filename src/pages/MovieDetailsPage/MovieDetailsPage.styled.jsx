import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  background: ${props => props.theme.colors.gradientOrange};
  :hover,
  :focus {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.accent};
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px auto;
  justify-content: center;
`;

export const StyledBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-left: 28px;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: ${props => props.theme.colors.accent};
  }
`;
