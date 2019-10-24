import React, { Fragment, useContext, useEffect } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
  const activityStore = useContext(ActivityStore);
  const { activity, openEditForm, cancelSelectedActivity, loadActivity } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity]);

  return <h1>Hey Activity</h1>;

  return (
    <Fragment>
      {activity && (
        <Card fluid>
          <Image src={`/assets/categoryImages/${activity!.category}.jpg`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{activity!.title}</Card.Header>
            <Card.Meta>
              <span>{activity!.date}</span>
            </Card.Meta>
            <Card.Description>{activity!.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths={2}>
              <Button
                onClick={() => openEditForm(activity!.id)}
                basic
                color="blue"
                content="Edit"
              />
              <Button onClick={cancelSelectedActivity} basic color="grey" content="Cancel" />
            </Button.Group>
          </Card.Content>
        </Card>
      )}
    </Fragment>
  );
};

export default observer(ActivityDetails);
