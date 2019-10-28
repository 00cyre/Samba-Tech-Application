import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterContainer from './features/character';
import { theme } from './styles/styles'
import EpisodesContainer from './features/episodes';
import SuggestionContainer from './features/suggestion';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <ThemeProvider theme={theme}>
              <Switch>
                <Route exact path="/" component={CharacterContainer} />
                <Route exact path="/suggestion" component={SuggestionContainer} />
                <Route exact path="/episodes" component={EpisodesContainer} />
              </Switch>
            </ThemeProvider>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;



