import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/slices/FilterSlice';
import { RootState } from '../../store/store';
import { Button } from '../Button/Button';

export const Filter = () => {
  const dispatch = useDispatch();
  const isFilter = useSelector(
    (state: RootState) => state.filterReducer.filter
  );
  const handleFilter = () => {
    dispatch(setFilter(!isFilter));
  };
  return (
    <S.Wrapper>
      <S.Box>
        <Button style={{ fontSize: '2rem',color: 'black' }} onClick={handleFilter}>
          L<br />i<br />k<br />e<br />d<br />
        </Button>
      </S.Box>
    </S.Wrapper>
  );
};
