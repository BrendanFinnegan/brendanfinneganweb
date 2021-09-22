import { Card } from "@material-ui/core";
import { Chip, Grid } from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
function Guitarspacecard () {


    return(
        <>
        <Card style={{boxShadow: "none", backgroundColor:  'rgba(216, 211, 211, 0.973)'}}>
        <Grid container>
        <Grid item xs={12} > 
            <h3>Synopsis:</h3>
            </Grid>
            <Grid item xs={6} style={{textAlign: 'center'}}> 
            <a className="link" href="https://my-guitar-space.herokuapp.com/" > Heroku App Link</a>
            </Grid>
            <Grid item xs={6}  style={{textAlign: 'center'}}> 
            <a className="link" href="https://github.com/BrendanFinnegan/GuitarApp"> Github Repo Link</a>
            </Grid>
            <Grid item xs={12} style={{textAlign: 'center'}} > 
            <h3>Demo Video</h3>
            <iframe src={`https://player.vimeo.com/video/596710549`} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Test Embed With Some weird music vimeo added!"></iframe>
                        
            </Grid>
        </Grid>
        </Card>
        </>
    )
}

export default Guitarspacecard