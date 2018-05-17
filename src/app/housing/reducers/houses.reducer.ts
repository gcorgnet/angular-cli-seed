import { ListHousesAction } from './../actions/housing';
import {Action} from '@ngrx/store';
import {HousingAction} from '../actions/housing';

export const houses = (state: any = [], action: Action) => {
  console.log('BAM', action);
  switch (action.type) {
    case HousingAction.LIST_HOUSES:
      console.log('REDUCING', (action as ListHousesAction).payload);
      return [...(action as ListHousesAction).payload];
    default:
      return state;
  }
};
