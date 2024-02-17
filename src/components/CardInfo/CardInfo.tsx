import { FC } from 'react';
import * as S from './style';

interface Props {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
}

export const CardInfo: FC<Props> = ({
  gender,
  name,
  species,
  status,
  type,
  origin
}) => {
  return (
    <S.Wrapper>
      <>
        {!type ? (
          <S.Name>{name} </S.Name>
        ) : (
          <S.Name>
            {name} - {type}
          </S.Name>
        )}
      </>
      <S.Description>
        <S.Text>{`Race:  ${species}`}</S.Text>
        <S.Text>{`Status:  ${status}`}</S.Text>
        <S.Text>{`Gender:  ${gender}`}</S.Text>
        <S.Text>{`Origin:  ${origin.name}`}</S.Text>
      </S.Description>
    </S.Wrapper>
  );
};
