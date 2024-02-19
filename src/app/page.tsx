'use client';
import { useEffect } from 'react';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from '../store/slices/charactersSlice';
import { setInfo } from '../store/slices/charactersSlice';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
import { useLazyGetCharacterQuery } from '../store/services/charactersService';
import { ListCharacter } from '../components/ListCharacter/ListCharacter';
import { Filter } from '../components/Filter/Filter';
import { results, ricksUniverse } from '@/types/types';
const Home = () => {
  const currentPage = useSelector(
    (state: RootState) => state.charactersReducer.page
  );
  const deleteList = useSelector(
    (state: RootState) => state.charactersReducer.deleteChar
  );

  const dispatch = useDispatch();
  const [fetchData] = useLazyGetCharacterQuery();

  useEffect(() => {
    fetchData(currentPage).then((res) => {
      const blackList = deleteList.map((el) => el.id);
      const data = res.data as unknown as ricksUniverse;

      const whiteList = data.results.filter(
        (el: results) => blackList.indexOf(el.id) === -1
      );
 
      dispatch(setCharacters(whiteList));
      dispatch(setInfo(res.data));
    });
  }, [currentPage]);

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
