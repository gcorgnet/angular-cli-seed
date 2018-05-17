import {Action} from '@ngrx/store';
import {HousingAction} from '../actions/housing';

export const houses = (state: any = [], action: Action) => {
  console.log('BAM', action)
  switch (action.type) {
    case HousingAction.LIST_HOUSES:
      console.log('REDUCING', action.payload)
      return [...action.payload];
    default:
      return state;
  }
};
