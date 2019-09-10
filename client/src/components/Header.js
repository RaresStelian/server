import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Button, List, ListItem } from '@material-ui/core'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // return 'still deciding'
        break

      case false:
        return (
          <ListItem>
            <a style={{ textDecoration: 'none', color: 'white' }} href='/auth/google'>
              Login with Google
            </a>
          </ListItem>
        )

      default:
        return (
          <ListItem>
            <a style={{ textDecoration: 'none', color: 'white' }} href='/api/logout'>
              Logout
            </a>
          </ListItem>
        )
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <AppBar position='static'>
          <Toolbar style={{ backgroundColor: 'rgb(22, 180, 205)', color: 'white' }}>
            {/* <IconButton edge='start'  color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton> */}
            <Typography noWrap style={{ flexGrow: 1 }}>
              <Link to={this.props.auth ? '/surveys' : '/'} style={{ textDecoration: 'none', color: 'white' }}>
                Emaily
              </Link>
            </Typography>
            <List>
              <ListItem style={{ display: 'flex', flexDirection: 'row' }}>
                <a style={{ textDecoration: 'none', color: 'white' }} href='/surveys/new'>
                  {this.renderContent()}
                </a>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { auth: state.auth }
// }

/* destructuring state */
const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
