import { Chip, Grid } from "@material-ui/core"

function About () {

    return(
        <>
        <Grid container >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Grid item xs={12} > </Grid>
        <Grid item xs={2} ></Grid>
        <Grid item xs={6} >
        <div style={{textAlign: 'left'}}>
        <h1>About Me</h1>

        <h4>I’m a native of Cleveland, Ohio and completed my undergrad at Ohio University. Since graduating college, I’ve lived in Pécs, Hungary, London, UK, Jacksonville, Florida, and finally Jaipur, India before settling down in New York City, where I’ve lived for the past six years. </h4>


        <h4>For the first five years of my working life, I worked for Deutsche Bank, managing their back end operations systems for their foreign exchange option trading platform. Learning the back end coding of their systems in an effort to automate trade confirmations was my first toe-dip into the career path that I've ultimately gravitated towards. I moved on from Deutsche Bank to get my role closer to the technology industry, and took a Product Support position with WeWork. In this capacity, I worked with Product Managers and Software Engineers daily to prioritize bugs and document features for the applications they were responsible for. </h4>

        <h4>After three and a half years at WeWork, I found myself in a position to attend Flatiron School’s Software Engineering course, and I pulled the trigger. The course was full time, 60 hour weeks for fifteen weeks, and I loved every bit of it. It provided daily coaching, projects, discussions and tests involving React, Ruby, Rails, SQL and many other concepts. Having completed the course in late August 2021, I am continuing to build projects as I seek out a position that utilizes this new skill set.</h4>

        <h4>Outside of work, I live happily with my fiance and my cat in Manhattan. I play soccer several times per week, I play guitar on my fire escape, and I follow all Cleveland pro sports teams far too closely. </h4>
        </div>
        </Grid>
  
        <Grid item xs={2} >

        <img style={{height: '300px', width: '300px', borderRadius: '50%'}}src="https://brendanbucket1988.s3.us-east-2.amazonaws.com/IMG_5587.jpg"/>
        </Grid>
        <Grid item xs={2} ></Grid>
    </Grid>
    </>
    )
}

export default About