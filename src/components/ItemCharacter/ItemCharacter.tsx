'use client';
import * as S from './style';
import { results } from '../../types/types';
import { Like, Delete } from '@/assets';
import { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  setFavorites,
  deleteFavorites
} from '../../store/slices/favoritesSlice';
import { deleteCharacters } from '@/store/slices/charactersSlice';

export const ItemCharacter = (props: results) => {
  const { id, image, name } = props;

  const favorites = useSelector(
    (state: RootState) => state.favoritesReducer.characters
  );
  const characters = useSelector(
    (state: RootState) => state.charactersReducer.characters
  );

  const isFilter = useSelector(
    (state: RootState) => state.filterReducer.filter
  );

  const dispatch = useDispatch();

  const [isLike, setLike] = useState(false);

  const handleFavorites = () => {
    if (!favorites.map((el: results) => el.id).includes(id)) {
      setLike((prev) => !prev);
      dispatch(setFavorites(props));
    } else {
      const newArr = favorites.filter((el: results) => el.id !== id);
      dispatch(deleteFavorites(newArr));
      setLike((prev) => !prev);
    }
  };

  const handleDeleteCard = () => {
    const newArr = characters.filter((el: results) => el.id !== id);
    dispatch(deleteCharacters(newArr));
  };
  useEffect(() => {
    const favorId = favorites.map((el) => el.id);
       if(favorId.includes(id)){
      setLike(true);
    }
  },[characters, favorites, id]);

  return (
    <S.Wrapper id={id}>
      <S.Box>
        <S.Img src={image} alt={name} />
        <S.H2>{name}</S.H2>
        <S.IconBox>
          <Button
            style={{
              cursor: 'pointer',
              background: 'transparent',
              border: 'none'
            }}
            onClick={handleFavorites}
          >
            {!isLike && !isFilter ? (
              <Like fillColor2="gray" />
            ) : (
              <Like fillColor2="red" />
            )}
          </Button>
          <Button onClick={handleDeleteCard} style={{ cursor: 'pointer' }}>
            <Delete />
          </Button>
        </S.IconBox>
      </S.Box>
    </S.Wrapper>
  );
};
