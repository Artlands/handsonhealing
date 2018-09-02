import React from 'react';
import { Container, Segment, Grid, Header, List, Icon} from 'semantic-ui-react';

const Footer = () => (
  <Segment vertical style={{ margin: 'em 0em 0em', padding: '3em 0em', background:"#AFEEEE", }}>
      <Container >
        <Grid divided stackable centered>
          <Grid.Row >
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
                  <Icon.Group size ='large'>
                    <Icon name='wechat' color='green'/>
                  </Icon.Group>
                  WeChat
                </List.Item>
                <List.Item >
                  <Icon.Group size ='large'>
                    <Icon name='facebook' color='blue'/>
                  </Icon.Group>
                  Facebook
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h4' content='Payments' />
              <List link>
                <List.Item >
                  <Icon name='dollar' size ='large'/>
                  <Icon name='cc visa' size ='large'/>
                  <Icon name='cc mastercard' size ='large'/>
                  <Icon name='cc discover' size ='large'/>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
);

export default Footer;
