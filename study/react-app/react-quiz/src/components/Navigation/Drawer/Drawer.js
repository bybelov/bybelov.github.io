import React, {Component} from 'react'
import classes from './Drawer.scss'
import BackDrop from './../../UI/BackDrop/BackDrop'
import {NavLink} from 'react-router-dom'

const links = [
  {
    url: '/',
    title: 'Home'
  },
  {
    url: '/about',
    title: 'About'
  },
  {
    url: '/quiz',
    title: 'Quiz'
  }
]

class Drawer extends Component {

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
            exact
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