import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieListTitle = styled.h2`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
  text-transform: uppercase;
`;

export const ListOfMovies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  color: ${props => props.theme.colors.white};
`;

export const ListItem = styled.li`
  display: flex;
  width: 240px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.boxShadowDiv};
  background: ${props => props.theme.colors.cardBackground};
  padding: 4px;
  transition: transform 250ms linear;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const LinkMovie = styled(NavLink)`
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.white};
`;

export const LinkMovieInfo = styled.p`
  padding: 8px;
  font-size: ${props => props.theme.fontSizes.ml};
  font-weight: ${props => props.theme.fontWeights.medium};
`;
