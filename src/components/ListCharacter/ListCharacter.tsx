import * as S from './style';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { ItemCharacter } from '../ItemCharacter/ItemCharacter';
import { NextPageIcon, PrevPageIcon } from '@/assets';
import { setPage } from '../../store/slices/charactersSlice';
export const ListCharacter = () => {
  const characters = useSelector(
    (state: RootState) => state.charactersReducer.allChar
  );

  const favorites = useSelector(
    (state: RootState) => state.charactersReducer.favoriteChar
  );

  const isFilter = useSelector(
    (state: RootState) => state.charactersReducer.filter
  );

  const dispatch = useDispatch();
  const pages = useSelector((state: RootState) => state.charactersReducer.pages);
  const currentPage = useSelector(
    (state: RootState) => state.charactersReducer.page
  );
  const handleNextPage = () => {
    if (currentPage < pages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  return (
    <>
      <S.PageBox>
        <S.ControllPage onClick={handlePrevPage}>
          <PrevPageIcon fillColor="black" />
        </S.ControllPage>
        <S.ControllPage onClick={handleNextPage}>
          <NextPageIcon fillColor="black" />
        </S.ControllPage>
      </S.PageBox>
      <S.Wrapper>
        {!isFilter && characters
          ? characters.map((char) => <ItemCharacter key={char.id} {...char} />)
          : favorites.map((char) => <ItemCharacter key={char.id} {...char} />)}
      </S.Wrapper>
    </>
  );
};
