import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import SimpleMap from './Map';

const Contact = () => {
  return(
    <Grid columns = 'three' centered>
      <Grid.Row textAlign='center'>
        <Header as='h2'>Contact Hands On Healing For The Body</Header>
      </Grid.Row>
      <Grid.Row textAlign='center'>
        <Header as='h3'>Located in Lubbock serving Shallowater and surrounding areas.
</Header>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Icon name='phone' size='huge' color='orange'/>
          <Header as='h3'>Call us at</Header>
          <Header as='h2'>(806)792-8928</Header>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Icon name='home' size='huge' color='orange'/>
          <Header as='h3'>5718 1st Place </Header>
          <Header as='h2'>Lubbock, TX 79416</Header>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Icon name='mail' size='huge' color='orange'/>
          <Header as='h3'>Email us at</Header>
          <Header as='h2'>stigersapril@gmail.com</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <SimpleMap/>
      </Grid.Row>
    </Grid>
  )
}

export default Contact;