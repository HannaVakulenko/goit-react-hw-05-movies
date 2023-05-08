import styled from 'styled-components';

export const UpSpan = styled.span`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;
