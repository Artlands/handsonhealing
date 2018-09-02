import React from 'react';

import { Grid, Segment, Label } from 'semantic-ui-react';

const Massage = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Segment padded>
                <Label attached='top' style={{fontSize: '1.2em', textAlign: 'center'}}>Western Massage Techniques</Label>
                <p>Western massage techniques focus primarily on the body to promote relaxation, improve blood circulation and relieve muscle tension. Hands On Healing For The Body techniques include a variety of applications provided by trained and certified massage therapists who carefully assess your condition and recommend the most suitable treatment.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  
);

export default Massage;
