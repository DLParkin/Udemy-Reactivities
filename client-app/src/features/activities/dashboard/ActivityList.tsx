import React from 'react';
import { Image, Item, Button, Label, Segment } from 'semantic-ui-react';

const ActivityList = () => {
  return (
    <Segment clearing>
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header as="a">title</Item.Header>
            <Item.Meta>date</Item.Meta>
            <Item.Description>
              <div>Description</div>
              <div>city, venue</div>
            </Item.Description>
            <Item.Extra>
              <Button floated="right" content="view" color="blue" />
            </Item.Extra>
            <Label basic content="Category" />
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
