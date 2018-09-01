import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const Contact = () => {
  return(
    <Grid columns = 'equal'>
      <Grid.Row>
        <Grid.Column>
          <Segment>Pic1</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Pic2</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Pic2</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Contact;