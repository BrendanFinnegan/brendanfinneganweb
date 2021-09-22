import { Card } from "@material-ui/core";
import { Chip, Grid } from "@material-ui/core"

function Gametrackercard () {
    function herokuPop () {
        window.open(
            `https://ancient-caverns-65129.herokuapp.com/`,
            '_blank' 
          );
    }
    function gitPop () {
        window.open(
            `https://github.com/JackCornblum/GameTracker`,
            '_blank' 
          );
    }

    return(
        <>
        <Card className="projcard" style={{backgroundColor:  'rgba(216, 211, 211, 0.973)'}}>
        <Grid container>
        <Grid item xs={12} > 
            <h3 style={{marginLeft: '10px'}}>Synopsis:</h3>
            <p style={{marginLeft: '10px'}}> The Game Tracker app was built for video game enthusiasts. It allows its users to keep a record of video games that they are interested in playing in the future, games that they are currently playing, and games that they have completed in the past. As a fan of video games myself, I was always curious to see a record of all of the games that I've played throughout my past, and review notes and reviews I had for each game. This app tackles that issue.  </p>
            <p style={{marginLeft: '10px'}}> Game Tracker is integrated with a 3rd party API to enable its users to keyword-search a vast internet database of video games, and then add any of the results to their library. Once a game is in the user's library, they can add comments, ratings, keep track of time spent playing the game, and even find out if the game is on sale at any of the popular game distribution sites. </p>
            <p style={{marginLeft: '10px'}}> A demonstration video can be found below, as well as the links to both the Heroku app and Github Repo. </p>
            </Grid>
    
            <Grid item xs={12} style={{textAlign: 'center', margin: '0px'}} > 
            {/* <h3 className="no-mh3">Demo Video</h3> */}
            <iframe src={`https://player.vimeo.com/video/605020416`} width="740" height="460" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Test Embed With Some weird music vimeo added!"></iframe>
                        
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

export default Gametrackercard