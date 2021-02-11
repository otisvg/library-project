import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import readify from './images/readify.png'
import Books from './components/Books/Books'
import Form from './components/Form/Form'


const App = () =>  {
  return (
    <Container maxwidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center"></Typography>
          <img src={ readify } alt="readify" width="25%" height="auto"/>
       </AppBar>
       <Grow in>
          <Container>
            <Grid container justify="space-between" align-items="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Books />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form />
                </Grid>
            </Grid>
          </Container>
       </Grow>
    </Container>

  )
}

export default App;