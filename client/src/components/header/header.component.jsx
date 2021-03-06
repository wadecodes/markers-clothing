import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../actions/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';
import { selectCartVisibility } from '../../selectors/cart.selector';
import { selectCurrentUser } from '../../selectors/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

const Header = ({ currentUser, cartVisibility, signOutStart }) => {
  const renderAuth = () => {
    if (currentUser) {
      return (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      );
    } else {
      return <OptionLink to="/auth">SIGN IN</OptionLink>;
    }
  };
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {renderAuth()}
        <CartIcon />
      </OptionsContainer>
      {cartVisibility ? <CartDropDown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartVisibility: selectCartVisibility,
});

export default connect(mapStateToProps, { signOutStart })(Header);
