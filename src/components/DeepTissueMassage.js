import React from 'react';

import { Grid, Segment, Label } from 'semantic-ui-react';

const Massage = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Segment padded>
                <Label attached='top' style={{fontSize: '1.2em', textAlign: 'center'}}>Deep Tissue Massage</Label>
                <p>Deep tissue massage is often confused with deep pressure massage. Deep pressure massage means a constant, strong pressure throughout the session. Deep tissue massage can indeed have a significant amount of pressure behind certain techniques but deep tissue always has a goal. It is used on ailments like chronic pain, recovery from injuries, limited mobility, postural problems and muscle tension or spasm, among others.</p>
                <p>Deep tissue massage will start off light to relax the surface muscles so that the masseuse can eventually get to the muscles underneath (hence deep tissue). Many of the physical issues we have after receiving an injury or strain affects all the muscles in the area. This is why a masseuse has to get to all the muscles to get all the kinks out.</p>
                <p>As the massage is meant to get down deep into the problematic area it is common that the client may be a bit sore for a day or two afterwards. This is because massage is something of a passive workout. The muscles are being worked and if they are not used to being manipulated then they will get sore just like an average physical work out.</p>
                <p>Even though deep tissue massage is commonly thought of as a, ‘no pain, no gain’ type of massage, that is not actually the case. If you ever feel that the therapist is applying too much pressure, tell them right away. At Hands On Healing For The Body we are here to make you feel better but also to make your whole experience a pleasant one.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  
);

export default Massage;
