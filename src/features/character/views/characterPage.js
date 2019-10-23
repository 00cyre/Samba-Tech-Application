import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import logo from '../../../public/logo512.png'
export class CharacterPage extends PureComponent {
  state = {
    filterText: '',
    spacing: 5,
    setSpacing: ''
  }

  setFields = (value, field) => {
    this.setState({
      [field]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state
    //let Characters;
    if (Array.isArray(this.props.Characters)) {
      //Characters = filterFunction() 
    }
    return (
      <React.Fragment >
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.navigation}>
            <img
              id="imgLogoBreakingBad"
              className={classes.imglogo}
              src={logo}
              alt="Logo Breaking Bad"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
              {this.props.Characters.Characters.map(value => (
                <Grid className={classes.rootGrid} key={value.char_id} item>
                  <Grid className={classes.navbar}>

                  </Grid>
                  <Paper className={classes.paper}>

                    <Grid className={classes.image} style={{
                      background: `linear-gradient(rgba(255, 255, 255, 0),rgb(0, 0, 0)),url(${value.img})`,
                      backgroundSize: 'cover'
                    }} />
                    <Paper className={classes.statusbox}
                      style={
                        value.status == 'Deceased' ? { backgroundColor: '#F56523' } : value.status == 'Alive' ? { backgroundColor: '#0A7A42' } : { backgroundColor: '#8C8C8C' }
                      }>
                      <span className={classes.statustxt}>{value.status}</span>
                    </Paper>
                    <Grid className={classes.charInfo}>
                      <span className={classes.nametxt}>{value.name}</span>
                      <span className={classes.birthdaytxt}>⭐ {value.birthday}</span>
                      <span className={classes.occupationtxt}>{value.occupation.map(e=> ' ' + e)} </span>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment >
    );
  }
}
const styles = theme => ({
  image: {
    width: '100%',
    height: '100%'
  },
  navbar: {
    position: 'absolute',
    width: 1546,
    height: 257,
    left: 187,
    top: 44,
  },
  navigation: {

    position: 'relative',
    width: 1546,
    height: 257,
    left: 187,
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
    height: 16,
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
    height: 50,
    position: 'absolute',
    fontSize: 34,
    alignItems: 'center',
    paddingLeft: 32,
  },
  rootGrid: {

  },
  imglogo: {
    position: 'absolute',
    width: 207,
    height: 120,
    left: 11,
    top: 0,

  },
  statustxt: {
    top: 3.94,
    left: 2.97,
    color: 'white',
    width: 145,
    height: 46,
    display: 'flex',
    position: 'absolute',
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
    textIndent: 1,
  },
  statusbox: {
    position: 'absolute',
    borderRadius: 0,
    width: 148.58,
    height: 50.25,
    right: 0,
    top: 12.13,

  },
  charInfo: {
    position: 'absolute',
    width: 307.53,
    height: 84.9,
    right: 60.47,
    bottom: 13.86,
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

export default withStyles(styles)(CharacterPage);
