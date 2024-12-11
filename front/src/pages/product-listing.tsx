import { NextPage } from 'next';

import ProductListing from '~/components/screens/ProductListing/ProductListing';

const ProductListingPage: NextPage = () => <ProductListing />;

export default ProductListingPage;

export const getStaticProps = async () => {

  return {
    props: {},
    revalidate: process.env.REVALIDATE_TIMEOUT && parseInt(process.env.REVALIDATE_TIMEOUT, 10),
  };
};
