import { ListCarsAction, AddCarAction } from './../actions/cars';
import {Action} from '@ngrx/store';
import {CarAction} from '../actions/cars';

export const cars = (state: any = [], action: Action ) => {

  switch (action.type) {
    case CarAction.ADD_CAR:
      return [...state, (action as AddCarAction).payload];
    case CarAction.LIST_CARS:
      return [...(action as ListCarsAction).payload];
    default:
      return state;
  }
};
