import React from 'react';

import { Grid, Segment, Label } from 'semantic-ui-react';

const Massage = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Segment padded>
                <Label attached='top' style={{fontSize: '1.2em', textAlign: 'center'}}>Trigger Point Therapy</Label>
                <p>If you have ever received a massage then you have probably come across trigger points. They are commonly known as muscle knots; the often painful spots where muscles seem to be clumped together in a tight little ball.</p>
                <p>For an expert trigger point therapist there is much more to consider than these painful little points in the muscles. The body is a connected system and it is often the case that a trigger point is just one end of the problem. Most trigger points refer to pain along the nerve pathways so it takes skilled hands to get to the root of the problem. And if one muscle is being problematic then it is almost certain to have an effect on the surrounding muscles.</p>
                <p>If you find yourself having acute muscular pain then trigger point therapy may be the therapy for you. During the session our therapist will also question your daily habits to see if the knotted muscle is a result of your routine. Then we can give you tips on  avoiding straining the muscle again so that the problem does not recur.</p>
                <p>If you are looking for someone to get the kinks out then look no further than Hands On Healing For The Body. , : We are deep tissue specialists.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  
);

export default Massage;
