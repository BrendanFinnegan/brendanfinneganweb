import { Card } from "@material-ui/core";
import { Chip, Grid } from "@material-ui/core"
import Typography from '@material-ui/core/Typography';

function Diablocard () {
    function herokuPop () {
        window.open(
            `https://diablo2-rune-app.herokuapp.com/`,
            '_blank' 
          );
    }
    function gitPop () {
        window.open(
            `https://github.com/BrendanFinnegan/Diablo2RuneApp  `,
            '_blank' 
          );
    }

    return(
        <>
        <Card className="projcard" style={{backgroundColor:  'rgba(216, 211, 211, 0.973)'}}>
        <Grid container>
        <Grid item xs={12} > 
            <h3 style={{marginLeft: '10px'}}>Synopsis:</h3>
            <p style={{marginLeft: '10px'}}> The Diablo 2 Rune App is for the use of <a target="_blank" href="https://en.wikipedia.org/wiki/Diablo_II:_Resurrected">Diablo 2</a> players.  </p>
            <p style={{marginLeft: '10px'}}> Within this videogame, players collect a certain resource called Runes. Runes can be used to craft various items, however there is no means of knowing which items can be crafted via any in-game tools or menus.</p>
            <p style={{marginLeft: '10px'}}> This app allows users to create a profile, log which Runes they own, and then the app will display all of the possible items that they can possibly craft.</p>
            <p style={{marginLeft: '10px'}}> The app is currently in development. </p>
            </Grid>
    
            <Grid item xs={12} style={{textAlign: 'center', margin: '0px'}} > 
         
            <iframe src={`https://player.vimeo.com/video/631226030?h=085ea820bd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} width="740" height="460" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Test Embed With Some weird music vimeo added!"></iframe>
                        
            </Grid>
            <Grid item xs={6} style={{textAlign: 'center'}}> 
            <a className="link" onClick={herokuPop} > Heroku App Link</a>
            </Grid>
            <Grid item xs={6}  style={{textAlign: 'center'}}> 
            <a className="link" onClick={gitPop}> Github Repo Link</a>
            </Grid>
        </Grid>
        </Card>
        </>
    )
}

export default Diablocard