import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const EpisodesList = (props) => {
    const { classes, episodes } = props;
    return (
        episodes.map(e => (
            <tr className={classes.episodesview} key={e.id}>
                <td className={classes.epinfo} id={`epinfo-${e.id}`}>
                    <span className={classes.episodetxt}>{e.title}</span>
                    <span className={classes.episodeinfotxt}>Season {e.season} Episodio {e.episode}</span>
                </td>
                <td className={classes.dateinfotxt} id={`dateinfo-${e.id}`}>
                    <span className={classes.launchdatetxt}>Data de estreia:
                      {e.air_date}</span>
                </td>
                <td className={classes.epcharacterinfo} id={`charinfo-${e.id}`}>
                    <span className={classes.episodecharacters}>Personagens: {e.characters.map(e => e + " ")}</span>
                </td>
            </tr>
        ))
    )

}
const styles = theme => ({
    epcharacterinfo: {
        padding: '20px 100px',
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
        padding: '20px 100px',
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
        padding: '20px 100px',
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
});

export default withStyles(styles)(EpisodesList);
