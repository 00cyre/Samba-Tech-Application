import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CharacterPage from './characterPage';
import * as characterOperations from '../redux/characterOperations';

export class CharacterContainer extends PureComponent {
  async componentDidMount() {
    await this.props.getCharacter();
  }
  render() {
    return <CharacterPage {...this.props} />
  }
}

const mapDispatchToProps = {
  getCharacter: characterOperations.getCharacters,
};

CharacterContainer.defaultProps = {
    Characters: [],
};

export const mapStateToProps = (state) => {
  return {
    Characters: state.characterReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterContainer);
