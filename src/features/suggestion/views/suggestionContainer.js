import React, { PureComponent } from 'react';
import SuggestionPage from './suggestionPage';
import SuggestionManager from '../suggestionManager';

export class SuggestionContainer extends PureComponent {
  sendSuggestion = async (obj) => {
    await SuggestionManager.sendSuggestion({
      "author": obj.name,
      "message": obj.message
    });
  }
  render() {
    return <SuggestionPage sendSuggestion={this.sendSuggestion} />
  }
}

export default SuggestionContainer;