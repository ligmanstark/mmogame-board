'use client';
import { Header } from '@/Layout/Header/Header';
import { Footer } from '@/Layout/Footer/Footer';
import { Container } from '@/styled/components';
import { GlobalStyles } from '@/styled/GlobalStyles';
import { CharCard } from '@/components/CharCard/CharCard';
const Page = () => {
  return (
    <main>
      <GlobalStyles />
      <>
        <Header />
        <Container>
          <CharCard />
        </Container>
        <Footer />
      </>
    </main>
  );
};

export default Page;
