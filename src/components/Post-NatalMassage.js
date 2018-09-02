import React from 'react';

import { Grid, Segment, Label } from 'semantic-ui-react';

const Massage = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Segment padded>
                <Label attached='top' style={{fontSize: '1.2em', textAlign: 'center'}}>Post-Natal Massage</Label>
                <p>Bringing new life into the world is a wonderful thing which it also puts severe strain on the body. Postnatal massage sessions are tailored to help with postpartum issues with which every mother deals.</p>
                <p>The body goes through a rapid transition after giving birth with changes in your hormones, body shape and center of gravity. Massage eases these stresses by relaxing the muscles that have been strained during the prenatal and natal process. Feeling relaxed increases a more balanced hormone production, realigns the muscles and re-focus your center of gravity. This therapy is designed to increase circulation which contributes to the reduction of postpartum swelling a more lasting effect. May incorporate stretches to produce.</p>
                <p>It is quite common for new mothers to care of themselves as well as they should. Being refreshed and relaxed after your therapy session, frees you to better care for your new baby.</p>
                <p>Hands On Healing For The Body: we take care of you so you can focus on the one that needs you.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
  
);

export default Massage;
