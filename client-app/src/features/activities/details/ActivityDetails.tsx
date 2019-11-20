import React, { Fragment, useContext, useEffect } from "react";
import { Card, Image, Button, Grid } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Link } from "react-router-dom";
import ActivityDetailedHeader from '../details/ActivityDetailedHeader';
import ActivityDetailedInfo from '../details/ActivityDetailedInfo';
import ActivityDetailedChat from '../details/ActivityDetailedChat';
import ActivityDetailedSideBar from '../details/ActivityDetailedSideBar';

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const activityStore = useContext(ActivityStore);
  const { activity, loadActivity, loadingInitial } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity)
    return <LoadingComponent content="loading activity..." />;

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
          <ActivityDetailedHeader />
          <ActivityDetailedInfo />
          <ActivityDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityDetailedSideBar />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default observer(ActivityDetails);
