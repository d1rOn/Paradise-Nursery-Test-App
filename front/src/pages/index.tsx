import { NextPage } from 'next';

import Home from '~/components/screens/Home/Home';

const HomePage: NextPage = () => <Home />;

export default HomePage;

export const getStaticProps = async () => {

  return {
    props: {},
    revalidate: process.env.REVALIDATE_TIMEOUT && parseInt(process.env.REVALIDATE_TIMEOUT, 10),
  };
};
