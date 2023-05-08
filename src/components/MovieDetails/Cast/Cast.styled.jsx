import styled from 'styled-components';

export const CastWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  text-align: center;
`;

export const ActorCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  max-width: 200px;
`;
