import { Chip, Grid } from "@material-ui/core"

function Home () {
    return(
        <>
        <Grid container >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           
            <Grid item xs={12} > 
            <h2 style={{color: 'red'}}>Website Under Construction</h2>
             </Grid>
            <Grid item xs={3} ></Grid>
            <Grid item xs={5} >
                <div style={{textAlign: 'left'}}>
                    <br/>
                    <br/>
            <h1>Hi, I'm Brendan</h1>
            <h3>I'm a full stack web developer who enjoys learning and building with new technologies each day. </h3>
            <h3>Check out some of my projects in the portfolio page.</h3>
            </div>
            </Grid>
      
            <Grid item xs={2} >

            <img style={{height: '325px', width: '300px', borderRadius: '50%'}}src="https://brendanbucket1988.s3.us-east-2.amazonaws.com/IMG_5587.jpg"/>
            </Grid>
            <Grid item xs={2} ></Grid>
        </Grid>
</>
    )
}

export default Home