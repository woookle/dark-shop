import React, { Component } from "react";
import style from "./Item.module.css";

export class Item extends Component {
  render() {
    return (
      <div className={style.item}>
        <img
          src={"./img/" + this.props.item.img}
          className={style.cart__image}
          alt="image"
        />
        <div>
          <h2 className={style.title}>{this.props.item.title}</h2>
          <h2 className={style.author}>{this.props.item.author}</h2>
        </div>
        <div className={style.price__btn}>
          <h2 className={style.price}>{this.props.item.price} $</h2>
          <button onClick={() => {this.props.onAdd(this.props.item)}} className={style.add__to__cart}>Add</button>
        </div>
      </div>
    );
  }
}

export default Item;
