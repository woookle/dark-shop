import React, { Component } from "react";
import style from "./Order.module.css";
import { RiDeleteBack2Fill } from "react-icons/ri";

export class Order extends Component {
  render() {
    return (
      <div className={style.order}>
        <div className={style.image__title}>
          <img className={style.image} src={"./img/" + this.props.item.img} />
          <div>
            <p>{this.props.item.title}</p>
            <p className={style.price}>{this.props.item.price} $</p>
          </div>
        </div>
        <RiDeleteBack2Fill className={style.delete} onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    );
  }
}

export default Order;
