import { FC, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import s from './Btn.module.scss';

interface BtnProps {
  className?: string;
  variant?: "default" | "common" | "warning"
  children?: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ className, variant = "default", children, href, disabled, onClick }) => {
  const Tag = href ? Link : 'button';

  return (
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    /* @ts-ignore */
    <Tag
      className={clsx(className, s.btn, s[`btn_${variant}`])}
      {...(href && {
        href,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

export default Btn;
