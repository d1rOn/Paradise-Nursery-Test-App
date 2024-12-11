import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Img from '~/components/base/Img/Img';
import Btn from '~/components/shared/Btn/Btn';

import { addProduct, selectCart } from '~/store/reducers/cart';

import { IProduct } from '~/interfaces/product.interface';

import s from './ProductCard.module.scss';

interface ProductCardProps {
  className?: string;
  product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({
  className,
  product,
}) => {
  const cart = useSelector(selectCart);
  const dispatch  = useDispatch();

  const { img, title, price } = product;
  const isInCart = cart.some((cartItem) => cartItem.id === product.id);

  return (
    <div className={clsx(className, s.productCard)}>
      <div className={s.productCard__body}>
        <Img className={s.productCard__img} src={img} alt={title} />
        <div className={s.productCard__content}>
          <h3 className={s.productCard__title}>{title}</h3>
          <span className={s.productCard__price}>${price}</span>
          <Btn
            className={s.productCard__btn}
            disabled={isInCart}
            onClick={() => {
              dispatch(
                addProduct({
                  ...product,
                  quantity: 1,
                }),
              );
            }}
          >
            {`${isInCart ? "Added" : "Add"} to Cart`}
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
