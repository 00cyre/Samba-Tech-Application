import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../shared/navigationBar';
import EpisodesList from './episodesList'
export class EpisodesPage extends PureComponent {
  state = {
    searchtxt: '.',
    fieldname: undefined,
    episodes: [],
  }
  setFields = (value, field) => {
    this.setState({
      [field]: value
    });
  };
  componentDidMount() {
    this.setEpisodes('.');
  }
  componentDidUpdate() {
    this.setEpisodes(this.state.searchtxt);
  }
  setEpisodes(txt) {
    console.log(this.state.episodes);
    !this.state.searchtxt ? txt = '.' : txt = this.state.searchtxt
    this.state.episodes = this.props.Episodes.Episodes.filter((e) => {
      return e.title.toLocaleLowerCase().match(txt.toLocaleLowerCase());
    })
  }

  render() {
    const { classes } = this.props;
    if (this.props.Episodes.Episodes.length > 0) {
      this.setEpisodes('.');
    }
    return (
      <React.Fragment >
        <Grid container className={classes.components} spacing={2}>
          <NavBar  handleChange={this.setFields} pageTitle={'Episodios'} />
          <Grid item xs={12}>
            <Grid container spacing={2} className={classes.content}>
              <table className={classes.root}>
                <tbody>
                  <EpisodesList episodes={this.state.episodes}/>
                </tbody>
              </table>
            </Grid>
          </Grid >
        </Grid >
      </React.Fragment >
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
  },

  components: {

    position: 'absolute',
    width: 1550,
    height: 1080,
    left: 'calc(50% - 1550px/2 + 10px)',
    top: 0,

  },

  content: {
    top: 356,
    height: '100%',
    position: 'absolute'
  },
});

export default withStyles(styles)(EpisodesPage)