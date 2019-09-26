import { createReducer, on, ActionReducer, Action } from '@ngrx/store';
 
export const initialState = 0;

export const INCREMENT  = 'INCREMENT';
export const DECREMENT  = 'DECREMENT';
export const RESET      = 'RESET';

export class Increment implements Action    { type = INCREMENT };
export class Decrement implements Action    { type = DECREMENT };
export class Reset implements Action        { type = RESET };

const _counterReducer: ActionReducer<Number> = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}