import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 76px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  font-size: ${props => props.theme.fontSizes.m};
  text-align: center;
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.boxShadowHeader};
  margin-left: -16px;
  margin-right: -16px;

  > nav {
    display: flex;
  }
`;

export const Logo = styled(NavLink)`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  margin: 0;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.gradientOrange};
  }
`;
