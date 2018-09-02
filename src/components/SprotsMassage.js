import React from 'react';

import { Grid, Segment, Label } from 'semantic-ui-react';

const Massage = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Segment padded>
                <Label attached='top' style={{fontSize: '1.2em', textAlign: 'center'}}>Sports Massage</Label>
                <p>Frequently administered prior to and following competition and events, professional Sports Massages are designed to allow our Abernathy clients achieve peak physical performance by releasing body fatigue, muscle tension and increasing flexibility and coordination. Trained Hands On Healing For The Body massage therapists provide professional Sports Massage to help athletes of all kinds prevent injuries and improve performance.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  
);

export default Massage;
