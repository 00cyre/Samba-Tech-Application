import { Grid, Button, TextField, InputAdornment } from "@material-ui/core"
import { Search } from "@material-ui/icons"
import React, { useState, useEffect } from 'react';
import logo from '../../public/logo512.png'
import { withStyles } from "@material-ui/styles";


const NavBar = (props) => {
  const [pageTitle, setTitle] = useState(undefined);
  const setFilter = (a, b) => {
    updatePageTitle(a);
    props.handleChange(a, b);
  };
  const updatePageTitle = (searchtxt) => {
    searchtxt === undefined && (searchtxt = '');
    searchtxt !== "" ? setTitle(`Você pesquisou por "${searchtxt.toLowerCase()}"`) : setTitle(props.pageTitle)
  }
  const updateTag = (tag) => {
    props.updateTag(tag.currentTarget.value);
  }
  useEffect(() => {
    setTitle(props.pageTitle)
    updatePageTitle();
  }, [props.pageTitle]);
  const { classes } = props;
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
          <span className={classes.characterlabel}>{pageTitle}</span>
          {
            props.pageTitle === "Personagens" ? (
              <Grid className={classes.filtergrid}>
                <span className={classes.filtertxt}>Filtre por:</span>
                <Button variant="outlined" value={'Alive'} onClick={e => updateTag(e)} className={classes.alivebtn}>Vivo </Button>
                <Button variant="outlined" value={'Deceased'} onClick={e => updateTag(e)} className={classes.deadbtn} >Morto</Button>
                <Button variant="outlined" value={'.'} onClick={e => updateTag(e)} className={classes.allbtn}>Todos</Button>
              </Grid>) : ''
          }
        </Grid>
        {
          props.pageTitle !== '' ? (
            <TextField
              id="searchbar"
              className={classes.search}
              label={`Pesquise os ${props.pageTitle.toLowerCase()}`}
              onChange={e => setFilter(e.target.value, 'searchtxt')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search></Search>
                  </InputAdornment>
                ),
              }}
            />
          ) : ''
        }

      </Grid>
    </Grid>
  )

}
const styles = theme => ({
  suggestion: {
    position: 'absolute',
    width: 102,
    left: 623,
    top: 41,
    fontSize: 17,
    textTransform: 'none',
    display: 'flex',
    alignItems: 'flex-end',
    letterSpacing: '0.015em',
    color: '#5D5D5D',
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
    width: 900,
    left: 0,
    bottom: 0,
    overflow: 'hidden',
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
    textTransform: 'none',

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
    textTransform: 'none',
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
  imglogo: {
    position: 'absolute',
    width: 202,
    height: 120,

  },
});
export default withStyles(styles)(NavBar);