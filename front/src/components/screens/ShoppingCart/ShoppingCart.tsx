import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Popup from '~/components/base/Popup/Popup';
import Layout from '~/components/layout/Layout';
import Seo from '~/components/layout/Seo/Seo';
import Btn from '~/components/shared/Btn/Btn';
import ProductCard from './ProductCard/ProductCard';

import {
  clearCart,
  selectCart,
  selectCartTotalPrice,
} from '~/store/reducers/cart';

import { Pathname } from '~/enums/pathname.enum';

import s from './ShoppingCart.module.scss';

interface ShoppingCartProps {}

const ShoppingCart: FC<ShoppingCartProps> = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { push } = useRouter();

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  return (
    <Layout className={s.shoppingCartPage}>
      <Seo />
      <div className={s.shoppingCart}>
        <div className={s.shoppingCart__container}>
          <div className={s.shoppingCart__body}>
            <div className={s.shoppingCart__content}>
              {cart.map((product) => (
                <ProductCard
                  className={s.shoppingCart__product}
                  product={product}
                />
              ))}
            </div>
            <div className={s.shoppingCart__footer}>
              <span className={s.shoppingCart__total}>
                <span>Total cart amount:</span> ${cartTotalPrice}
              </span>
              <Btn
                className={s.shoppingCart__btn}
                href={Pathname.ProductListing}
              >
                Continue shopping
              </Btn>
              <Popup
                className={s.shoppingCart__popup}
                {...(cart.length && {
                  button: <Btn className={s.productCard__btn}>Checkout</Btn>
                })}
                forceOpen={showPopup}
                setForceOpen={(state) => {
                  setShowPopup(state);

                  if (state) {
                    return;
                  }

                  dispatch(clearCart());
                  push(Pathname.ProductListing);
                }}
              >
                Coming Soon
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
