import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../shared/navigationBar';
import CharacterList from './characterList';
const CharacterPage = (props) => {
  const [searchtxt, setSearch] = useState(undefined);
  const [characters, setCharacter] = useState([]);
  useEffect(async () => {
    await props.getCharacter();
    setCharacters('.');
  }, []);
  useEffect(() => {
    setCharacters(searchtxt);
  }, [searchtxt]);
  const setCharacters = (txt) => {
    setSearch(txt);
    !searchtxt ? txt = '.' : txt = searchtxt
    let el = props.Characters.Characters.filter((e) => {
      return e.name.toLocaleLowerCase().match(txt.toLocaleLowerCase());
    })
    setCharacter(el);
  }
  const updateTag = (tag) => {
    let el = props.Characters.Characters.filter((e) => {
      return e.status.match(tag);
    })
    setCharacter(el)
  }
  const spacing = 2;
  const { classes } = props;
  if (props.Characters.Characters > 2) {
    setCharacters('.');
  }
  return (
    <React.Fragment >
      <Grid id={'mainGrid'} container className={classes.components} spacing={spacing}>
        <NavBar classes={classes} handleChange={setCharacters} searchtxt={searchtxt} pageTitle={'Personagens'} updateTag={updateTag} />
        <Grid item xs={12}>
          <Grid container spacing={spacing} className={classes.content}>
            <CharacterList characters={characters} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment >
  );
}
const styles = () => ({
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
export default withStyles(styles)(CharacterPage);
