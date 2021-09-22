import { Chip, Grid } from "@material-ui/core"
import Gametrackercard from "./Gametrackercard"
import Guitarspacecard from "./Guitarspacecard"
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function Portfolio () {

    const useStyles = makeStyles((theme) => ({
 
        
          root: {
            
            border: 'none', 
            shadow: 'none', 
            
            boxShadow: "none",
            topBorder: 'none',
            textAlign: 'center',
            display: 'block',
            padding: 'none'
            
          },
          
          heading: {
             
            boxShadow: "none",
            color: 'black',
           
            fontWeight: 'bold', 
            border: 'none', 
            shadow: 'none',
            textDecoration: 'underline',
            backgroundColor:  'rgba(216, 211, 211, 0.973)',
            topBorder: 'none',
            textAlign: 'center',
            alignItems: 'center',
            display: 'block'
           
          }}))

          const classes = useStyles();
    return(

        <>
        <Grid container>
        <Grid item xs={12} > 
            <h2 style={{color: 'red'}}>Website Under Construction</h2>
             </Grid>
             <Grid item xs={12} > 
            <h2 style={{color: 'red'}}>Website Under Construction</h2>
             </Grid>
        <Grid item xs={12} >
            
        <h3>My Projects</h3>
      
        <p>Click to expand the project's details and demo</p>
        </Grid>

        <Grid item xs={2} ></Grid>
        <Grid item xs={8} >
        <Accordion className={classes.root} style={{backgroundColor:  'rgba(216, 211, 211, 0.973)', transition: 'none', boxShadow: "none" }} >
        <AccordionSummary className={classes.root} style={{display: 'flex'}}>
        <h3 className={classes.heading} > My Guitar Space </h3>
        </AccordionSummary>
        <AccordionDetails className={classes.root} style={{textAlign: 'left', boxShadow: "none", padding: "none"}} >
        <Guitarspacecard />
        </AccordionDetails>
        </Accordion>
        
        </Grid>
        <Grid item xs={2} ></Grid>

        <Grid item xs={2} ></Grid>
        <Grid item xs={8} >
        <Accordion className={classes.root} style={{backgroundColor:  'rgba(216, 211, 211, 0.973)', transition: 'none', boxShadow: "none" }} >
        <AccordionSummary className={classes.root} style={{display: 'flex'}}>
        <h3 className={classes.heading} > Game Tracker </h3>
        </AccordionSummary>
        <AccordionDetails className={classes.root} style={{ boxShadow: "none" }} >
        <Gametrackercard />
        </AccordionDetails>
        </Accordion>
        
        </Grid>
        <Grid item xs={2} ></Grid>
       
        <Grid item xs={2} ></Grid>
        <Grid item xs={8} >
        <Accordion className={classes.root} style={{backgroundColor:  'rgba(216, 211, 211, 0.973)', transition: 'none', boxShadow: "none" }} >
        <AccordionSummary className={classes.root} style={{display: 'flex'}}>
        <h3 className={classes.heading} > Diablo 2 Rune App (Coming Soon) </h3>
        </AccordionSummary>
        <AccordionDetails className={classes.root} style={{ boxShadow: "none" }} >
        <Guitarspacecard />
        </AccordionDetails>
        </Accordion>
        
        </Grid>
        <Grid item xs={2} ></Grid>

        </Grid>
        </>
    )
}

export default Portfolio