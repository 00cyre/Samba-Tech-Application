import { Grid, Button, TextField, InputAdornment } from "@material-ui/core"
import { Search } from "@material-ui/icons"
import React, { PureComponent } from 'react';
import logo from '../../public/logo512.png'
import { withStyles } from "@material-ui/styles";


export class NavBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    pageTitle: ''
  }
  setFields = (value, field) => {
    this.setState({
      [field]: value
    });
  };
  setFilter(a, b) {
    this.updatePageTitle();
    this.props.handleChange(a, b);
  }
  componentDidMount() {
    this.setFields(this.props.pageTitle, this.state.pageTitle)
    this.updatePageTitle();
  }
  updatePageTitle() {
    this.props.searchtxt != undefined ? this.setFields(`Você pesquisou por "${this.props.searchtxt.toLowerCase()}"`, this.state.pageTitle) : this.setFields(this.props.pageTitle, 'pageTitle')
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12}>
        <Grid className={classes.navigation}>
          <img
            id="imgLogoBreakingBad"
            className={classes.imglogo}
            src={logo}
            alt="Logo Breaking Bad"
          />
          <Button href={'/episodes'} className={classes.episodes}>Episodios</Button>
          <Button href={'/'} className={classes.characters}>Personagens</Button>
          <Button href={'/suggestion'} className={classes.suggestion}>Sugestão</Button>
          <Grid>
            <span className={classes.characterlabel}>{this.props.pageTitle}</span>
            {
              this.props.pageTitle === "Personagens" ? (
                <Grid className={classes.filtergrid}>
                  <span className={classes.filtertxt}>Filtre por:</span>
                  <Button variant="outlined" value={'Alive'} onClick={e => this.setFilter(undefined, e.target.value)} className={classes.alivebtn}>Vivo </Button>
                  <Button variant="outlined" value={'Presumed dead'} onClick={e => this.setFilter(undefined, e.target.value)} className={classes.deadbtn} >Morto</Button>
                  <Button variant="outlined" value={'.'} onClick={e => this.setFilter(undefined, e.target.value)} className={classes.allbtn}>Todos</Button>
                </Grid>) : ''
            }
          </Grid>
          <TextField
            id="searchbar"
            className={classes.search}
            label={`Pesquise os ${this.props.pageTitle.toLowerCase()}`}
            onChange={e => this.setFilter(e.target.value, 'searchtxt')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search></Search>
                </InputAdornment>
              ),
            }}
          />

        </Grid>
      </Grid>
    )
  }
}
const styles = theme => ({
  suggestion: {
    position: 'absolute',
    width: 102,
    left: 623,
    top: 41,
    fontSize: 17,
    display: 'flex',
    alignItems: 'flex-end',
    letterSpacing: '0.015em',
    color: '#5D5D5D',
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
export default withStyles(styles)(NavBar);