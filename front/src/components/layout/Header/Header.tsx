import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

import Img from '~/components/base/Img/Img';

import { selectCartTotalQuantity } from '~/store/reducers/cart';

import { Pathname } from '~/enums/pathname.enum';

import { navData } from '~/data/nav.data';

import s from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { asPath } = useRouter();
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  return (
    <div className={clsx(className, s.header)}>
      <div className={s.header__container}>
        <div className={s.header__body}>
          <nav className={s.header__menu}>
            <div className={s.header__list}>
              {navData.map(({ label, value }) => (
                <Link
                  key={value}
                  className={clsx(
                    s.header__item,
                    asPath === value && s.header__item_active,
                  )}
                  href={value}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
          <Link className={s.header__cart} href={Pathname.ShoppingCart}>
            <Img
              className={s.header__icon}
              src='/img/icons/cart.svg'
              alt='Cart'
              svg
            />
            <span className={s.header__count}>{cartTotalQuantity}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
