import { withStyles, Grid, Paper } from "@material-ui/core";
import React from 'react';

const CharacterList = (props) => {
    const {classes} = props
    return (
        props.characters.map(value => (
            <Grid className={classes.rootGrid} key={value.char_id} item>
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
                        <span className={classes.occupationtxt}>{value.occupation.map(e => ' ' + e)} </span>
                    </Grid>
                </Paper>
            </Grid>
        )))
}
const styles = () => ({
    occupationtxt: {
        position: 'absolute',
        overflow:'hidden',
        textOverflow:'ellipsis',
        width: 304,
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
    image: {
        width: '100%',
        height: '100%'
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

});
export default withStyles(styles)(CharacterList)

