import { FC } from 'react';

import FullScreen from '~/components/base/FullScreen/FullScreen';
import Img from '~/components/base/Img/Img';
import Layout from '~/components/layout/Layout';
import Seo from '~/components/layout/Seo/Seo';
import Btn from '~/components/shared/Btn/Btn';

import { Pathname } from '~/enums/pathname.enum';

import s from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <Layout className={s.homePage}>
    <Seo />
    <FullScreen
      className={s.home}
      background={
        <Img className={s.home__img} isResetStyle src='/img/main-bg.jpg' alt='Plants' />
      }
    >
      <div className={s.home__container}>
        <div className={s.home__body}>
          <div className={s.home__content}>
            <h1 className={s.home__title}>Paradise Nursery</h1>
            <Btn className={s.home__btn} href={Pathname.ProductListing}>
              Get started
            </Btn>
          </div>
          <div className={s.home__text}>
            <p>
              Paradise Nursery is a modern web application for lovers of indoor
              plants. With its help, users can easily find and buy a variety of
              plants ideal for home or office.
            </p>
          </div>
        </div>
      </div>
    </FullScreen>
  </Layout>
);

export default Home;
