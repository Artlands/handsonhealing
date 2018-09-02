import React from 'react';
import { Header } from 'semantic-ui-react';

const Policies = () => {
  return(
    <div>
      <Header as='h2'>
        Privacy Policy
        <Header.Subheader>All information we gather is confidential and purely to understand the client’s history as it pertains to the therapy they require.</Header.Subheader>
      </Header>
      <Header as='h2'>
        24 Hour Cancellation & Late Policy
        <Header.Subheader>Our clients are obligated to contact us 24 hours in advance for cancelations. If 24 hours is not given then the client must pay full price for the session they missed. If a client arrives late to a session they will receive treatment during the remaining time and are required to pay for the full session.</Header.Subheader>
      </Header>
      <Header as='h2'>
        Illness
        <Header.Subheader>If you are suffering from any sort of illness, especially those which are transferable, we ask that you do not enter the center. In the event of an unexpected illness we will be happy to refund or reschedule your session. Please call to cancel as early as possible.</Header.Subheader>
        <Header.Subheader>Please bathe or shower before massage appointment. This is a curtesy to the therapist and facilitates relaxation for the client.</Header.Subheader>
      </Header>
      <Header as='h2'>
        Receipts
        <Header.Subheader>We provide receipts for every service we extend to our clients upon request.</Header.Subheader>
      </Header>
      <Header as='h2'>
        Gift Certificates
        <Header.Subheader>Gift certificates are non-refundable, non-transferrable and have no cash value. Please present your gift certificate in advance of treatment and confirm your gift certificate at the time of booking. All gift certificates are valid for 60 days after purchase, as indicated on the certificate itself.</Header.Subheader>
      </Header>
    </div>
  )
}

export default Policies;
