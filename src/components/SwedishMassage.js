import React from 'react';

import { Grid, Segment, Label } from 'semantic-ui-react';

const Massage = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Segment padded>
                <Label attached='top' style={{fontSize: '1.2em', textAlign: 'center'}}>Swedish Massage</Label>
                <p>Swedish massage is what most people mean when they talk about the general term massage. It is one of the most relaxing types of massage to receive as it works over the whole body. The general techniques are gliding, kneading, tapping, and vibrating or shaking; used on different muscles in the body depending on the desired result.</p>
                <p>A Swedish massage therapist can target specific areas to work out the kinks or you can have a full body treatment. To enhance the relaxing nature of the experience your session can include aromatherapy. The human body reacts to pleasant scents; the nose relays messages to the brain and tells the body to relax and be comfortable. Using natural essential oils to fill the air combined with the process of incorporating them into massage oil improves breathing and the ability to escape your troubles for the duration of the therapy.</p>
                <p>Another addition to the session which Hands On Healing For The Body offers its clients is hot stone massage. Special finely polished basalt stones (or lava rocks) are water heated and applied directly to the body to relax the muscles, creating a warming experience that is kneaded into the entire body.</p>
                <p>Not sure what type of Swedish massage to receive? Come into Hands On Healing For The Body for a free consultation and we will help you find the perfect therapy for your needs.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  
);

export default Massage;
