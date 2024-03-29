import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'

import * as actions from '../actions'

const Dashboard = params => {
  return <h2>Dashboard</h2>
}
const SurveyNew = params => {
  return <h2>SurveyNew</h2>
}

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

// const mapStateToProps = state => ({})

// const mapDispatchToProps = {}

export default connect(
  null,
  actions
)(App)
