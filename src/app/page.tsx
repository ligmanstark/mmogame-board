'use client';
import { useEffect } from 'react';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from '../store/slices/charactersSlice';
import { setInfo } from '../store/slices/infoSlice';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
import { useGetCharacterQuery } from '../store/services/charactersService';
import { ListCharacter } from '../components/ListCharacter/ListCharacter';
import { Filter } from '../components/Filter/Filter';
const Home = () => {
  const currentPage = useSelector((state: RootState) => state.pageReducer.page);
  const dispatch = useDispatch();
  const { data = [] } = useGetCharacterQuery(currentPage);

  useEffect(() => {
    dispatch(setCharacters(data as []));
    dispatch(setInfo(data));
  }, [data, dispatch]);
  return (
    <main>
      <GlobalStyles />
      <>
        <Header />
        <Container>
          <Filter />
          <ListCharacter />
        </Container>
        <Footer />
      </>
    </main>
  );
};

export default Home;
