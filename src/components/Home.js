import React from 'react';
import { Grid, Card, Segment } from 'semantic-ui-react';

const Home = () => {
  return(
    <Grid columns = 'equal'>
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>How Can Massage Therapy Help Me?</Card.Header>
              <Card.Description>Massage therapy is not merely a luxury, but can actually function as an important part of a comprehensive therapeutic treatment plan. Countless studies have revealed that massage is highly effective for the relief of a variety of physical and psychological conditions when carried out by a licensed and professionally trained practitioner.</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>For Relaxation or Therapeutic Relief</Card.Header>
              <Card.Description>Whether you require massage therapy as a well-deserved treat; a drug free alternative for alleviating chronic physical symptoms or as a complement to conventional medicine, Hands On Healing For The Body offers the people of Lubbock both Western and Eastern massage therapy treatments that can be adapted to any requirement and provide lasting relief.</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>Find the massage technique that works best for you</Card.Header>
              <Card.Description>Discover a method for restoring balance and health to both body and mind. Explore the many benefits offered to the people of Lubbock by Licensed Hands On Healing For The Body massage therapists. Contact us to discuss your needs with one of our Licensed massage therapists.</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
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

export default Home;