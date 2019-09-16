import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, List, ListItem } from '@material-ui/core'
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // return 'still deciding'
        return

      case false:
        return (
          <List>
            <ListItem>
              <a style={{ textDecoration: 'none', color: 'white' }} href='/auth/google'>
                Login with Google
              </a>
            </ListItem>
          </List>
        )

      default:
        return (
          <List>
            <ListItem>
              <Payments />
              <div style={{ paddingLeft: '20px' }}>Credits: {this.props.auth.credits}</div>
              <a style={{ paddingLeft: '20px', textDecoration: 'none', color: 'white' }} href='/api/logout'>
                Logout
              </a>
            </ListItem>
          </List>
        )
    }
  }

  render() {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar style={{ backgroundColor: 'rgb(22, 180, 205)', color: 'white', height: '10px' }}>
            <Typography noWrap style={{ flexGrow: 1 }}>
              <Link to={this.props.auth ? '/surveys' : '/'} style={{ textDecoration: 'none', color: 'white' }}>
                Emaily
              </Link>
            </Typography>
            <List>
              <ListItem style={{ display: 'flex', flexDirection: 'row' }}>{this.renderContent()}</ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

/* destructuring state */
const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
