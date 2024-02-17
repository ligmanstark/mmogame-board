'use client';
import { FC } from 'react';
import { Container } from '../../styled/components';
import * as S from './style';
export const Header: FC = () => {
  return (
    <>
      <Container>
        <S.Wrapper>Rick and Morty Character Universe</S.Wrapper>
      </Container>
    </>
  );
};
