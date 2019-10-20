import { observable } from 'mobx';
import { createContext } from 'react';
import { IActivity } from '../models/activity';

class ActivityStore {
  @observable activities: IActivity[] = [];
  @observable loadingInitial = false;
}

export default createContext(new ActivityStore())