import React, { Component } from "react";
import { connect } from "react-redux";
import Payments from "../Payments";
import { Button } from "../SharedElement";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksA,
  NavNotLink,
  NavtextItem,
} from "./navBarElements";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem>
            <NavLinksA href="/auth/google">
              <Button primary="true" dark="true" big="true">
                Login with Google
              </Button>
            </NavLinksA>
          </NavItem>
        );

      default:
        return [
          <NavItem key="1">
            <NavtextItem>Credits: {this.props.auth.credits}</NavtextItem>
          </NavItem>,
          <NavItem key="3">
            <NavNotLink>
              <Button primary="true" dark="true" big="true">
                <Payments />
              </Button>
            </NavNotLink>
          </NavItem>,
          <NavItem key="2">
            <NavLinksA href="/api/logout">
              <Button primary="true" dark="true" big="true">
                Logout
              </Button>
            </NavLinksA>
          </NavItem>,
        ];
    }
  }
  render() {
    return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to={this.props.auth ? "/surveys" : "/"}>
              FeedBacker
            </NavLogo>

            <NavMenu>{this.renderContent()}</NavMenu>
          </NavbarContainer>
        </Nav>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
