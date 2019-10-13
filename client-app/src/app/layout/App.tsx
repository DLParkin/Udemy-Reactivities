import React, { useState } from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';
import { IActivity } from '../models/activity';

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  // componentDidMount() {
  //   axios.get<IActivity[]>('http://localhost:5000/api/activities').then(response => {
  //     this.setState({
  //       activities: response.data
  //     });
  //   });
  // }

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Reactivities</Header.Content>
      </Header>
      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
