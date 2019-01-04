import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Footer = ({ count }) => <p>Você tem {count} favoritos</p>;

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToprops = state => ({
  count: state.favorites.length,
});

export default connect(mapStateToprops)(Footer);
