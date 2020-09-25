import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = (props) => {
  const renderAuth = () => {
    if (props.currentUser) {
      return (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      );
    } else {
      return (
        <Link className="option" to="auth">
          SIGN IN
        </Link>
      );
    }
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <p className="option">
          Welcome{' '}
          {props.currentUser
            ? props.currentUser.displayName.toUpperCase()
            : 'Guest'}
        </p>
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="shop">
          CONTACT
        </Link>
        {renderAuth()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
