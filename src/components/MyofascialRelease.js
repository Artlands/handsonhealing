import React from 'react';

import { Grid, Segment, Label } from 'semantic-ui-react';

const Massage = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Segment padded>
                <Label attached='top' style={{fontSize: '1.2em', textAlign: 'center'}}>Myofascial Release</Label>
                <p>To understand this brand of therapy it is important to know what the fascia is. The fascia, is the outer layer of the Myofascia which covers the muscles but is under the skin. Fascia is similar to tendons and ligaments in that they are all connective tissue and are made of collagen.</p>
                <p>What is key to understanding Myofascial release is that the fascia is the focus point. The fascia houses the muscles and keeps them aligned. If a trauma happens to the body then the fascia may become ‘glued’ to the muscle or traumatic area. This can lead to many problems. Muscles will not move properly, organs may be shifted to incorrect positions, blood vessels may be restricted and muscle and bone connections may be obstructed.</p>
                <p>Myofascial release therapy targets the places where the fascia is blocked to relieve the tension and guide the muscles into their proper place. The therapy is quite relaxing in itself as the process is quite gentle. Often a knowledgeable therapist merely has to heat up the area with certain techniques to unglue the fascia. As a system that runs through the entire body the fascia knows where it should be. When it is unglued it often tells the therapist where it should be by the natural direction it pulls.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  
);

export default Massage;
