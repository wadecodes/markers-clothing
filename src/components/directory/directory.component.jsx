import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectSection } from '../../selectors/directory.selector';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSection,
});

export default connect(mapStateToProps)(Directory);
