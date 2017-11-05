import { Action } from 'redux';

export function counter(state = 0, action: Action): any {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 100;
    default:
      return state;
  }
}
