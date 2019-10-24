import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from "@material-ui/styles";
//import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { SuggestionContainer } from './features/suggestion';
import CharacterContainer from './features/character';
import { theme } from './styles/styles'
//import { EpisodesContainer } from './features/episode';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <ThemeProvider theme={theme}>
              <Switch>
                <Route exact path="/" component={CharacterContainer} />
              </Switch>
            </ThemeProvider>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
//<Route exact path="/episode" component={EpisodesContainer} />
//<Route path="/suggestion" component={SuggestionContainer} />

export default App;



