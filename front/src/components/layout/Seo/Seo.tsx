import { FC } from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

import { handleMetaTags } from './handleMetaTags.util';

interface SeoProps extends Omit<NextSeoProps, 'additionalMetaTags'> {
  additionalMetaTags?: string[];
}

const Seo: FC<SeoProps> = ({
  title,
  description,
  additionalMetaTags,
  openGraph,
}) => (
  <NextSeo
    title={title || 'Paradise Nursery'}
    description={description}
    additionalMetaTags={
      additionalMetaTags && handleMetaTags(additionalMetaTags)
    }
    openGraph={openGraph}
  />
);

export default Seo;
