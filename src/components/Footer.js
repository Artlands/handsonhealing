import React from 'react';
import { Container, Segment, Grid, Header, List, Button, Icon} from 'semantic-ui-react';

const Footer = () => (
  <Segment vertical style={{ margin: 'em 0em 0em', padding: '3em 0em', background:"#AFEEEE", }}>
      <Container textAlign='center'>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header  as='h4' content='Opening Hours' />
              <List link >
                <List.Item >Mon-Fri: 9:00 - 6:00 PM</List.Item>
                <List.Item >Sat: 9:00 - 4:00 PM</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' content='Contact Information' />
              <List link>
                <List.Item >Tel:(806)792-8928</List.Item>
                <List.Item >stigersapril@gmail.com</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' content='Social Media' />
              <List link>
                <List.Item >
                  <Button color='twitter'>
                    <Icon name='twitter' /> Twitter
                  </Button>
                </List.Item>
                <List.Item >
                  <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                  </Button>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' content='Payments' />
              <List link>
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
