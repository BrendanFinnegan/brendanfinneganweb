import { Chip, Grid } from "@material-ui/core"

function Contact () {

    return (
        <>
<Grid container>
            <Grid item xs={12} > 
                 <h2 style={{color: 'red'}}>Website Under Construction</h2>
             </Grid>
             <Grid item xs={12} >
        <h3>Contact Information</h3>
        </Grid>
        <Grid item xs={4} >
        
        </Grid>
        <Grid item xs={4}  style={{textAlign: 'left'}}>
        <h4>Email: <a href="mailto:brendanwfinnegan@gmail.com">brendanwfinnegan@gmail.com</a> </h4>
        <h4>Linked In: <a  target="_blank" href="https://www.linkedin.com/in/brendanwfinnegan/"> https://www.linkedin.com/in/brendanwfinnegan/ </a></h4>
        <h4>Github: <a target="_blank" href="https://github.com/BrendanFinnegan"> https://github.com/BrendanFinnegan </a> </h4>
        <a  target="_blank" href="https://brendanbucket1988.s3.us-east-2.amazonaws.com/Brendan+Finnegan+Resume+September+2021+(2).pdf"> <h4>Link to Resume</h4></a>
        </Grid>
        <Grid item xs={4} >
       
        </Grid>
        </Grid>
        </>
    )
}

export default Contact