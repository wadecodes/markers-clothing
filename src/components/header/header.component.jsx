import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';
import { selectCartVisibility } from '../../selectors/cart.selector';
import { selectCurrentUser } from '../../selectors/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, cartVisibility }) => {
  const renderAuth = () => {
    if (currentUser) {
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
          {currentUser ? currentUser.displayName.toUpperCase() : 'Guest'}
        </p>
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="shop">
          CONTACT
        </Link>
        {renderAuth()}
        <CartIcon />
      </div>
      {cartVisibility ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartVisibility: selectCartVisibility,
});

export default connect(mapStateToProps)(Header);
