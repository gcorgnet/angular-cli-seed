import { SearchAction } from './../actions/cars';
import {Action} from '@ngrx/store';
import {CarAction} from '../actions/cars';

const types: string[] = [];

export const term = (state: string = '', action: Action ) => {

  types.push(action.type);

  switch (action.type) {
    case CarAction.SEARCH:
      return (action as SearchAction).payload;
    default:
      return state;
  }
};
