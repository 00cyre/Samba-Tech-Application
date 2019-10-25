import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import EpisodesPage from './episodesPage';
import * as episodesOperations from '../redux/episodesOperations';

export class EpisodesContainer extends PureComponent {
  async componentDidMount() {
    await this.props.getEpisode();
  }
  render() {
    return <EpisodesPage {...this.props} />
  }
}

const mapDispatchToProps = {
  getEpisode: episodesOperations.getEpisode,
};

EpisodesContainer.defaultProps = {
    Episodes: [],
};

export const mapStateToProps = (state) => {
  return {
    Episodes: state.episodesReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodesContainer);
