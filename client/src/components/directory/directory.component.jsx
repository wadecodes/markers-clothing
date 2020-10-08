import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectSection } from '../../selectors/directory.selector';

import {DirectoryMenuContainer} from './directory.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSection,
});

export default connect(mapStateToProps)(Directory);
