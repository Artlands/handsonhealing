import React from 'react';
import { Grid, Label, Segment, Image, Card } from 'semantic-ui-react';

const About = () => {
  return(
    <Grid>
      <Grid.Row>
        <Grid.Column width={10}>
          <Segment raised>
          <Label as='a' color='red' ribbon style={{fontSize: '1.2em' }}>
            Hands On Healing For The Body
          </Label>
          <div>
            <p style={{ margin: '1.5em'}}>Hands On Healing For The Body has been a trusted source of effective body work and massage therapy since 1997. We pride ourselves on providing practical knowledge and helpful recommendations dispensed by professionally trained and licensed massage practitioners committed to offering long term relief for a wide range of physical ailments and discomfort.</p>
          </div>
            <Label as='a' color='orange' ribbon style={{fontSize: '1.2em' }}>
              The Hands On Healing For The Body Mission
            </Label>
            <div>
              <p style={{ margin: '1.5em'}}>We believe that therapeutic touch, when professionally applied in one of its many therapeutic, non-sexual forms, has the power to restore and activate the healing potential present within each individual. Our licensed massage therapists have provided beneficial results that range from restoring mobility to those suffering with physical ailments, to helping clients overcome debilitating stress related conditions.</p>
            </div>
            <Label as='a' color='blue' ribbon style={{fontSize: '1.2em' }}>
              Dedicated and Professional Massage Therapist
            </Label>
              <div>
                <p style={{ margin: '1.5em'}}>Our qualified and caring massage therapist has been extensively trained in various treatment techniques from both Western and Eastern disciplines. The Therapists were trained at Austin School Of Massage Therapy in Lubbock, Tx. and later returned to Austin School Of Massage Therapy for further training as a Massage Therapy Instructor , becoming an Instructor, also in Lubbock, Tx.</p>
              </div>
            <Label as='a' color='teal' ribbon style={{fontSize: '1.2em' }}>
              Massage Therapy to Treat Any Condition
            </Label>
            <div>
              <p style={{ margin: '1.5em'}}>Through the years, Hands On Healing For The Body has adapted many therapeutic techniques to meet the various needs of our clients in Lubbock. We provide therapeutic services that range from treatment for physical ailments due to sports injuries, accidents and ongoing degenerative conditions, to massage therapies that are designed to treat a broad spectrum of psychological issues brought on by trauma or the stress of day-to-day living. Upon arriving at o/o you ll be greeted with a smile and respect.</p>
            </div>
            <Label as='a' color='olive' ribbon style={{fontSize: '1.2em' }}>
              Massage Therapy Adapted to the Individual
            </Label>
            <div>
              <p style={{ margin: '1.5em'}}>Hands On Healing For The Body welcomes clients of all ages and adjusts massage therapy treatments according to an individual’s specific condition, physical limitations and personal needs. Therapeutic massage is provided in a safe, non-invasive and relaxing and pleasant setting so that the people of Lubbock will get the most out of their visits.</p>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6} >
          <Card>
            <Image src='http://handsonhealingforthebody.com/wp-content/uploads/sites/119/2016/09/about_april.jpg' />
            <Card.Content>
              <Card.Header>April Stigers</Card.Header>
              <Card.Description>April Stigers is an experienced Massage Therapist since 1997. She is experienced in Deep Tissue Massage, Trigger Point Therapy and Swedish Massage in the Lubbock, Shallowater and Levelland area.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Phone: (806) 792-8928
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default About;
