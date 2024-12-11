import { useEffect } from 'react';

interface IUseWindowListener {
  (e: string, handler: () => void): void;
}

export const useWindowListener: IUseWindowListener = (e, handler) => {
  useEffect(() => {
    handler();
    window.addEventListener(e, handler);

    return () => window.removeEventListener(e, handler);
  }, [e, handler]);
};
