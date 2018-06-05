import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return; // show nothing
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="">Logout</a>
          </li>
        );
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Header);
