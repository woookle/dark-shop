import React, { useState } from "react";
import style from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order/Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div className={style.orders_carts}>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className={style.totalSum}>
        Сумма: {new Intl.NumberFormat().format(summa)} $
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div>
      <p>Товаров нет</p>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div className={style.navigation__logo}>
        <span className={style.logo}>Black Shop</span>
        {/* <ul className={style.nav}>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul> */}
        <div className={style.cart__block}>
          <FaShoppingCart
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`${style.shopping__cart} ${cartOpen && style.active}`}
          />
          <p className={`${style.counter} ${props.orders.length == 0 && style.active}`}>{props.orders.length}</p>
        </div>
        {cartOpen && (
          <div className={style.shop__cart}>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className={style.presentacion}></div>
    </header>
  );
}
