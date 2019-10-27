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
  epcharacterinfo: {
    width: 501,
    height: 86,
    left: 655,
  },
  episodecharacters: {
    width: 261,
    height: 21,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.005em',
    color: '#DDDDDD',
  },
  root: {
    width: '100%',
  },
  launchdatetxt: {
    width: 261,
    height: 21,
    left: 0,
    top: 0,
    fontSize: 24,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.005em',
    color: '#DDDDDD',
  },
  dateinfotxt: {
    width: 261,
    height: 49,
    left: 394,
    top: 7,
  },
  episodeinfotxt: {
    width: 394,
    height: 21,
    left: 0,
    top: 69,

    fontSize: 24,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.01em',
    color: '#DDDDDD',

  },
  episodetxt: {
    overflow: 'hidden',
    top: 0,
    left: 0,
    color: '#FEFEFE',
    width: 562,
    height: 70,
    fontSize: 52,
    letterSpacing: '0.02em',
  },
  epinfo: {
    width: 394,
    height: 90,
    overflow: 'hidden',
    left: 0,
    top: 0,
  },
  episodesview: {
    position: 'relative',
    width: 1156,
    height: 147,
  },
  components: {

    position: 'absolute',
    width: 1550,
    height: 1080,
    left: 'calc(50% - 1550px/2 + 10px)',
    top: 0,

  },
  alivebtn: {
    position: 'absolute',
    width: 148,
    height: 46,
    left: 132,
    borderRadius: 0,
    color: '#0A7A42',
    borderColor: '#0A7A42',
  },
  deadbtn: {
    position: 'absolute',
    width: 148,
    height: 46,
    left: 296,
    top: 0,
    borderRadius: 0,
    color: '#F46621',
    borderColor: '#F46621',
  },
  allbtn: {
    position: 'absolute',
    width: 148,
    height: 46,
    left: 461,
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 0,
    top: 0,
  },
  filtertxt: {
    position: 'absolute',
    width: 92,
    height: 17,
    left: 0,
    top: 15,
    fontSize: 18,
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.03em',
    color: '#E7E7E7',
  },
  filtergrid: {
    position: 'absolute',
    width: 609,
    height: 46,
    right: 0,
    top: 211,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  content: {
    top: 356,
    height: '100%',
    position: 'absolute'
  },
  characterlabel: {

    position: 'absolute',
    width: 272,
    left: 0,
    bottom: 0,

    fontSize: 37,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.07em',

    color: '#FAFAFA',

  },
  characters: {

    position: 'absolute',
    width: 102,
    left: 393,
    top: 41,
    fontSize: 17,
    display: 'flex',
    alignItems: 'flex-end',
    letterSpacing: '0.015em',

    color: '#5D5D5D',

  },
  search: {
    top: 36,
    right: 0,
    display: 'flex',
    position: 'absolute',
    fontSize: 28,
    width: 655
  },
  episodes: {
    position: 'absolute',
    width: 102,
    left: 521,
    top: 41,

    fontSize: 17,
    display: 'flex',
    alignItems: 'flex-end',
    letterSpacing: '0.015em',

    color: '#FFFFFF',

  },
  navigation: {
    position: 'absolute',
    width: '100%',
    height: 257,
    top: 44,

  },
  occupationtxt: {

    position: 'absolute',
    width: 368,
    left: 0,
    top: 69,
    bottom: 2,
    fontSize: 14,
    letterSpacing: '-0.02em',
    paddingLeft: 32,

    color: '#6E6E6E',
  },
  birthdaytxt: {

    position: 'absolute',
    width: 368,
    left: 0,
    top: 43,
    fontSize: 14,
    letterSpacing: '0.04em',
    paddingLeft: 32,

    color: '#FFFFFF',

  },
  nametxt: {

    overflow: 'hidden',
    top: '-10px',
    left: 0,
    color: '#FFFFFF',
    width: 368,
    height: 40,
    position: 'absolute',
    fontSize: 34,
    alignItems: 'center',
    paddingLeft: 32,
  },
  imglogo: {
    position: 'absolute',
    width: 202,
    height: 120,

  },
  statustxt: {
    top: 3.94,
    left: 2.97,
    color: 'white',
    width: 145,
    height: 46,
    position: 'absolute',
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
    textIndent: 1,
    paddingTop: 11,
  },
  statusbox: {
    position: 'absolute',
    borderRadius: 0,
    width: 148.58,
    height: 50.25,
    right: 0,
    top: 12.13,

    textAlign: 'center',
  },
  charInfo: {
    position: 'absolute',
    width: 307.53,
    height: 84.9,
    right: 60.47,
    bottom: 13.86,
  },
  rootGrid: {
    padding: 14
  },
  paper: {
    position: 'relative',
    width: 368,
    height: 499,
    left: 0,
    top: 0,
    borderRadius: 0,
  },
  control: {
    padding: theme.spacing(2),
  },
});

export default withStyles(styles)(EpisodesPage);
