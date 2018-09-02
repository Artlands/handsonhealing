import React from 'react';
import {List } from 'semantic-ui-react';

const Prices = () => {
  return(
    <div>
      <List bulleted>
        <List.Item>1 hour Swedish - $60.00</List.Item>
        <List.Item>1.5 hour Swedish - $80.00</List.Item>
        <List.Item>1 hour Deep Tissue - $ 70.00</List.Item>
        <List.Item>1.5 hour Deep Tissue - $90.00</List.Item>
        <List.Item>5 hour Swedish or Deep Tissue - $40.00</List.Item>
      </List>
      <p>**Same day appointments are sometimes available.</p>
      <p>To ensure the specific time of appointment desired, Please call 1 or 2 days in advance.</p>
    </div>
  )
}

export default Prices;
