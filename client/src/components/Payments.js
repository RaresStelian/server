import React, { Component } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from '@material-ui/core'

import * as actions from '../actions'

class Payments extends Component {
  render() {
    return (
      // @ts-ignore
      <StripeCheckout
        name='Emaily'
        description='5$ for 5 email credits'
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <Button style={{ color: 'white', padding: '5px', backgroundColor: 'rgb(247, 77, 51)' }}>Add credits</Button>
      </StripeCheckout>
    )
  }
}

export default connect(
  null,
  actions
)(Payments)
