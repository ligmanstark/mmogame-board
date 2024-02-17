import * as S from './style';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { deleteSelectChar } from '@/store/slices/selectCharSlice';
import { CardInfo } from '../CardInfo/CardInfo';
import { CardImg } from '../CardImg/CardImg';
import { BackSpace } from '@/assets/index';
export const CharCard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectChar = useSelector(
    (state: RootState) => state.selectCharReducer.characters
  );

  const handleBack = () => {
    router.push('/');
    setTimeout(() => {
      dispatch(deleteSelectChar());
    }, 200);
  };
  return (
    <S.Wrapper id={selectChar[0]?.id}>
      <S.ButtonBox onClick={handleBack}>
        <BackSpace />
        <p style={{ fontSize: '2rem' }}>Backspace</p>
      </S.ButtonBox>

      <S.Box>
        <CardImg image={selectChar[0]?.image} name={selectChar[0]?.name} />
        <CardInfo
          name={selectChar[0]?.name}
          gender={selectChar[0]?.gender}
          species={selectChar[0]?.species}
          status={selectChar[0]?.status}
          type={selectChar[0]?.type}
          origin={selectChar[0]?.origin}
        />
      </S.Box>
    </S.Wrapper>
  );
};
