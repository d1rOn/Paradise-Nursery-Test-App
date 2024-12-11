import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Img from '~/components/base/Img/Img';
import Btn from '~/components/shared/Btn/Btn';

import {
  decrementProduct,
  incrementProduct,
  removeProduct,
  selectCart,
} from '~/store/reducers/cart';

import { IProduct } from '~/interfaces/product.interface';

import s from './ProductCard.module.scss';

interface ProductCardProps {
  className?: string;
  product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ className, product }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const { img, title, price } = product;
  const productInCart = cart.find((cartItem) => cartItem.id === product.id);
  const productQuantity = productInCart!.quantity;

  return (
    <div className={clsx(className, s.productCard)}>
      <div className={s.productCard__body}>
        <Img className={s.productCard__img} src={img} alt={title} />
        <div className={s.productCard__content}>
          <h3 className={s.productCard__title}>{title}</h3>
          <span className={s.productCard__price}>${price}</span>
          <div className={s.productCard__quantity}>
            <Btn
              className={s.productCard__btn}
              variant='common'
              disabled={productQuantity === 1}
              onClick={() => {
                dispatch(decrementProduct(product.id));
              }}
            >
              -
            </Btn>
            <span className={s.productCard__count}>{productQuantity}</span>
            <Btn
              className={s.productCard__btn}
              variant='common'
              onClick={() => {
                dispatch(incrementProduct(product.id));
              }}
            >
              +
            </Btn>
          </div>
          <span className={s.productCard__total}>
            <span>Total:</span> ${price * productQuantity}
          </span>
          <Btn
            className={s.productCard__btn}
            variant='warning'
            onClick={() => {
              dispatch(removeProduct(product.id));
            }}
          >
            Delete
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
