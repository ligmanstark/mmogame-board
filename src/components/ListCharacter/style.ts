import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  grid-gap: 2rem;
`;

export const PageBox = styled.div`
  position: fixed;
  left: 6rem;
  border: 0.05rem solid white;
  border-radius: 1rem;
  box-shadow: inset -1px 1px 4px 4px grey;
  filter: red;
  background: transparent;
  padding: 0.5rem;
`;

export const ControllPage = styled.div`
  cursor: pointer;
`;
