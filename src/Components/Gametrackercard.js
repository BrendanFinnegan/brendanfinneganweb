import { Card } from "@material-ui/core";
import { Chip, Grid } from "@material-ui/core"

function Gametrackercard () {
    function herokuPop () {
        window.open(
            `https://my-guitar-space.herokuapp.com/`,
            '_blank' 
          );
    }
    function gitPop () {
        window.open(
            `https://github.com/BrendanFinnegan/GuitarApp`,
            '_blank' 
          );
    }

    return(
        <>
        <Card className="projcard" style={{backgroundColor:  'rgba(216, 211, 211, 0.973)'}}>
        <Grid container>
        <Grid item xs={12} > 
            <h3 style={{marginLeft: '10px'}}>Synopsis:</h3>
            <p style={{marginLeft: '10px'}}> My Guitar Space is an app that enables its users to build and maintain a library of songs that they know how to play. As a guitar player myself, I have learned hundreds of songs over my 10+ years of playing, but have never had a user-friendly way to track not only the song itself, but the details of how I particularly like to play it. I built this app to solve that problem.  </p>
            <p style={{marginLeft: '10px'}}> The app allows users to add new song objects to their own personal song table, and then keep details about the song such as notes, tabs, lyrics, and even a video recording of themselves playing the song.</p>
            <p style={{marginLeft: '10px'}}> Additionally, the app is integrated with a 3rd party API that enables the user to import song lyrics, as well as search for new songs to add to their library. More detailed information can be found in the ReadMe, on my Github repo. Below is a quick video demonstration, as well as links to my repo and heroku app itself.</p>
            </Grid>
    
            <Grid item xs={12} style={{textAlign: 'center', margin: '0px'}} > 
            {/* <h3 className="no-mh3">Demo Video</h3> */}
            <iframe src={`https://player.vimeo.com/video/596710549`} width="740" height="460" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Test Embed With Some weird music vimeo added!"></iframe>
                        
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