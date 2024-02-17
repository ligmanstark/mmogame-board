import * as S from './style';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { ItemCharacter } from '../ItemCharacter/ItemCharacter';
import { NextPageIcon, PrevPageIcon } from '@/assets';
import { setPage } from '../../store/slices/pageSlice';
import { scrollPageUp } from '../../helpers/scrollUp';
export const ListCharacter = () => {
  const characters = useSelector(
    (state: RootState) => state.charactersReducer.characters
  );

  const favorites = useSelector(
    (state: RootState) => state.favoritesReducer.characters
  );

  const isFilter = useSelector(
    (state: RootState) => state.filterReducer.filter
  );

  const dispatch = useDispatch();
  const pages = useSelector((state: RootState) => state.infoReducer.pages);
  const currentPage = useSelector((state: RootState) => state.pageReducer.page);
  const handleNextPage = () => {
    if (currentPage < pages) {
      dispatch(setPage(currentPage + 1));
      scrollPageUp();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
      scrollPageUp();
    }
  };

  return (
    <>
      <S.PageBox>
        <S.ControllPage onClick={handlePrevPage}>
          <PrevPageIcon fillColor="white" />
        </S.ControllPage>
        <S.ControllPage onClick={handleNextPage}>
          <NextPageIcon fillColor="white" />
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
