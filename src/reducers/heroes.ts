import { Action } from 'redux';

export function heroes(state: any[] = [], action: Action): any {
  switch (action.type) {
    case 'LOAD_HEROES':
      return [5, 7, 8, 9];
    default:
      return state;
  }
}
