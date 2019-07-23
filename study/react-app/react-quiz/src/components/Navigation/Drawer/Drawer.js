import React, {Component} from 'react'
import classes from './Drawer.scss'
import BackDrop from './../../UI/BackDrop/BackDrop'
import {NavLink} from 'react-router-dom'

const links = [
  {
    url: '/',
    title: 'Список тестов',
    exact: true
  },
  {
    url: '/auth',
    title: 'Авторизация',
    exact: false
  },
  {
    url: '/quiz-creator',
    title: 'Создать тест',
    exact: false
  }
]

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClosed()
  }

  renderLinks() {
    return links.map((link, index) => {
      return(
        <li key={index}>
          <NavLink
            to={{
              pathname: link.url,
              // search: '',
              // hash: ''
            }}
            activeClassName={classes.active}
            exact={link.exact}
            onClick={this.clickHandler}
          >
            {link.title}
          </NavLink>
        </li>
      )
    })
  }

  render() {

    const cls = [
      classes.Drawer
    ]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            { this.renderLinks() }
          </ul>
        </nav>
        { this.props.isOpen ? <BackDrop 
          onClick={this.props.onClosed}
        /> : null}
      </React.Fragment>
    )
  }
}

export default Drawer