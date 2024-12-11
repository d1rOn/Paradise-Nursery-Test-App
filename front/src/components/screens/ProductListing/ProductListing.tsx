import { FC } from 'react';

import Layout from '~/components/layout/Layout';
import Seo from '~/components/layout/Seo/Seo';
import ProductCard from './ProductCard/ProductCard';

import { categoriesData } from '~/data/products.data';

import s from './ProductListing.module.scss';

interface ProductListingProps {}

const ProductListing: FC<ProductListingProps> = () => (
  <Layout className={s.productListingPage}>
    <Seo />
    <div className={s.productListing}>
      <div className={s.productListing__container}>
        <div className={s.productListing__body}>
          {categoriesData.map(({ id, title, products }) => {
            return (
              <div key={id} className={s.productListing__category}>
                <h2 className={s.productListing__title}>{title}</h2>
                <div className={s.productListing__products}>{products.map((product) => {
                  return <ProductCard className={s.productListing__product} product={product}/>
                })
                }</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </Layout>
);

export default ProductListing;
