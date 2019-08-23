import {User} from './user.model';

export interface RequestModel {
  id: number;
  vetId: number;
  pastoralist: User;
}
