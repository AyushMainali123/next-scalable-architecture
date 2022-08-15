import CatCard from '../component/cards/cat/CatCard';
import { mockCatCardProps } from '../component/cards/cat/CatCard.mocks';
import PrimaryLayout from '../component/layout/primary/PrimaryLayout';
import SidebarLayout from '../component/layout/sidebar/SidebarLayout';
import type { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h1 className='text-green-800 text-4xl'>Hello From NextJS</h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  )
}