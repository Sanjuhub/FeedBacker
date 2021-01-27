import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="FeedBacker"
        description="&#x20B9;500.00 for 5 survey credit."
        amount={50000}
        currency={"INR"}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        Add Credits
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
