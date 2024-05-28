import React, { Component } from 'react'
import style from './Items.module.css'
import Item from './Item/Item'

export class Items extends Component {
  render() {
    return (
      <main className={style.main}>
        {this.props.items.map(el => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default Items