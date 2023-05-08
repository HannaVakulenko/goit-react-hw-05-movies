import styled from 'styled-components';

export const ReviewHeader = styled.h3`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-align: center;
  margin-bottom: 24px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  padding: 0 24px;
`;
