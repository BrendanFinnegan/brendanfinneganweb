import { Chip, Grid } from "@material-ui/core"
import Guitarspacecard from "./Guitarspacecard"

function Portfolio () {

    return(

        <>
        <Grid container>
        <Grid item xs={12} >
        <h3>My Projects</h3>
        </Grid>

        <Grid item xs={4} >
        <h3>My Guitar Space</h3>
        <Guitarspacecard />
        </Grid>

        <Grid item xs={4} >
        <h3>Game Tracker</h3>
        </Grid>

        <Grid item xs={4} >
        <h3>Diablo 2 Rune App (Coming Soon)</h3>
        </Grid>
        </Grid>
        </>
    )
}

export default Portfolio