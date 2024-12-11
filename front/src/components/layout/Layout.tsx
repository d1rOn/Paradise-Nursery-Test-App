import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Header from './Header/Header';

import { Pathname } from '~/enums/pathname.enum';

interface LayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ className, children }) => {
  const { asPath } = useRouter();

  return (
    <div className={clsx(className, 'layout')}>
      {asPath !== Pathname.Home && <Header />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
