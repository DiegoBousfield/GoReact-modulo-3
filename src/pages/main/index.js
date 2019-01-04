import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoritesAction from '../../store/actions/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string,
        description: PropTypes.string,
      }),
    ).isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = (e) => {
    const { addFavoriteRequest } = this.props;

    e.preventDefault();
    addFavoriteRequest(this.state.repositoryInput);
  };

  render() {
    const { repositoryInput } = this.state;
    const { favorites } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
          <ul>
            {favorites.map(favorite => (
              <li key={favorite.id}>
                <p>
                  <strong>{favorite.name}</strong> ({favorite.description})
                </p>
                <a href={favorite.url}>acessar</a>
              </li>
            ))}
          </ul>
        </form>
      </Fragment>
    );
  }
}

const mapStateToprops = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesAction, dispatch);

export default connect(
  mapStateToprops,
  mapDispatchToProps,
)(Main);
