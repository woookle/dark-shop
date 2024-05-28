import React, { Component } from 'react'
import style from './Categories.module.css'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'ALL'
        },
        {
          key: 'black',
          name: 'BLACK'
        },
        {
          key: 'dsbm',
          name: 'DSBM'
        }
      ]
    }
  }
  render() {
    return (
      <div className={style.calegories}>
        {this.state.categories.map(el => (
          <div onClick={() => this.props.chooseCategory(el.key)} className={style.category} key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories