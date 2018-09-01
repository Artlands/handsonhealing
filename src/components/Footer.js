import React from 'react';
import { Container, Segment, Grid, Header, List} from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ margin: 'em 0em 0em', padding: '3em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable centered>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Opening Hours' />
              <List link inverted>
                <List.Item >Mon-Fri: 9:00 - 6:00 PM</List.Item>
                <List.Item >Sat: 9:00 - 4:00 PM</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Contact Information' />
              <List link inverted>
                <List.Item >Tel:(806)792-8928</List.Item>
                <List.Item >stigersapril@gmail.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Social Media' />
              <List link inverted>
                <List.Item >WeChat</List.Item>
                <List.Item >Facebook</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Payments' />
              <List link inverted>
                <List.Item >Placeholder</List.Item>
                <List.Item >Placeholder</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
);

export default Footer;