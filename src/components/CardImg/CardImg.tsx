import { FC } from 'react';
import * as S from './style';

interface Props {
  image: string;
  name: string;
}

export const CardImg: FC<Props> = ({ image, name }) => {
  return (
    <S.Wrapper>
      <S.Img src={image} alt={name} />
    </S.Wrapper>
  );
};
