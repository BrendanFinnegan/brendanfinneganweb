import { Chip, Grid } from "@material-ui/core"
import Gametrackercard from "./Gametrackercard"
import Guitarspacecard from "./Guitarspacecard"

function Portfolio () {

    return(

        <>
        <Grid container>
        <Grid item xs={12} > 
            <h2 style={{color: 'red'}}>Website Under Construction</h2>
             </Grid>
        <Grid item xs={12} >
        <h3>My Projects</h3>
        </Grid>

        <Grid item xs={4} >
        <h3>My Guitar Space</h3>
        <Guitarspacecard />
        </Grid>

        <Grid item xs={4} >
        <h3>Game Tracker</h3>
        <Gametrackercard />
        </Grid>

        <Grid item xs={4} >
        <h3>Diablo 2 Rune App (Coming Soon)</h3>
        </Grid>

        </Grid>
        </>
    )
}

export default Portfolio