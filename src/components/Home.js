import React from 'react';
import { Grid, Segment, Divider, Header, List, Image, Button } from 'semantic-ui-react';
import Slides from './Carousel';


const Home = () => {
  return(
    <div>
        <Grid columns='three' divided>
          <Grid.Row>
            <Slides/>
          </Grid.Row>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '3em' }}>
              <Header as='h4' style={{ fontSize: '1.5em' }}>
                How Can Massage Therapy Help Me?
              </Header>
              <p style={{ fontSize: '1.1em',textAlign: 'left' }}>Massage therapy is not merely a luxury, but can actually 'function' as an important part of a comprehensive therapeutic treatment plan. Countless studies have revealed that massage is highly effective for the relief of a variety of physical and psychological conditions when carried out by a licensed and professionally trained practitioner.</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '3em' }}>
              <Header as='h4' style={{ fontSize: '1.5em' }}>
                For Relaxation or Therapeutic Relief
              </Header>
              <p style={{ fontSize: '1.1em',textAlign: 'left' }}>Whether you require massage therapy as a well-deserved treat; a drug free alternative for alleviating chronic physical symptoms or as a complement to conventional medicine, Hands On Healing For The Body offers the people of Abernathy both Western and Eastern massage therapy treatments that can be adapted to any requirement and provide lasting relief.</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '3em', paddingTop: '3em' }}>
              <Header as='h4' style={{ fontSize: '1.5em' }}>
                Find the massage technique that works best for you
              </Header>
              <p style={{ fontSize: '1.1em',textAlign: 'left' }}>Discover a method for restoring balance and health to both body and mind. Explore the many benefits offered to the people of Abernathy by Licensed Hands On Healing For The Body massage therapists. Contact us to discuss your needs with one of our Licensed massage therapists.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns = {2}>
          <Grid.Row textAlign='center'>
            <Grid.Column>
             <Image
              src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/06/bg6.jpg'
              as='a'
              href='http://google.com'
              fluid
              rounded/>
            </Grid.Column>
             <Grid.Column>
               <p style={{ fontSize: '1.2em' }}>
                 Located in Lubbock serving Abernathy and surrounding areas.
               </p>
               <Header as='h4' style={{ fontSize: '2em' }}>
                 CALL US AT (806) 792-8928
               </Header>
               <Divider hidden />
               <Button animated='fade' size='massive' color='orange'>
                 <Button.Content visible>GET IN TOUCH WITH US</Button.Content>
                 <Button.Content hidden>5718 1st Place, Lubbock, TX</Button.Content>
               </Button>
             </Grid.Column>
           </Grid.Row>
        </Grid>

        <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em 1em 0em', textTransform: 'uppercase', fontSize: '1em' }}
          >
            <p>Hands On Healing For The Body offers:</p>
        </Divider>
        <Segment padded >
          <List horizontal selection >
            <List.Item>
              <List.Header>Deep Tissue Massage</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Lymph Drainage Therapy</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Myofascial Release</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Positional Release</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Post-Natal Massage</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Pre-Natal Massage</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Reflexology</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Rolfing</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Sports Massage</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Swedish Massage</List.Header>
            </List.Item>
            <List.Item>
              <List.Header>Trigger Point Therapy</List.Header>
            </List.Item>
          </List>
        </Segment>

        <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em 1em 0em', textTransform: 'uppercase', fontSize: '1em' }}
          >
            <p>What the People of Abernathy should know when looking for a Massage Therapist</p>
        </Divider>

        <Grid columns = {3}>
          <Grid.Row>
            <Grid.Column >
               <Segment padded style={{background:"#DCDCDC"}}>
                 <p>When considering massage therapy for treatment of any condition, make sure to ask the practitioner about their training, experience and credentials.</p>
               </Segment>
             </Grid.Column>
             <Grid.Column>
               <Segment padded style={{background:"#DCDCDC"}}>
                 <p>When considering massage therapy for treatment of any condition, make sure to ask the practitioner about their training, experience and credentials.</p>
               </Segment>
             </Grid.Column>
             <Grid.Column>
               <Segment padded style={{background:"#DCDCDC"}}>
                 <p>When considering massage therapy for treatment of any condition, make sure to ask the practitioner about their training, experience and credentials.</p>
               </Segment>
             </Grid.Column>
           </Grid.Row>
        </Grid>

    </div>
  )
}

export default Home;
