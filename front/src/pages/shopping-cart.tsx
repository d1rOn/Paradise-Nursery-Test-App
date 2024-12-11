import { NextPage } from 'next';

import ShoppingCart from '~/components/screens/ShoppingCart/ShoppingCart';

const ShoppingCartPage: NextPage = () => <ShoppingCart />;

export default ShoppingCartPage;

export const getStaticProps = async () => {

  return {
    props: {},
    revalidate: process.env.REVALIDATE_TIMEOUT && parseInt(process.env.REVALIDATE_TIMEOUT, 10),
  };
};
