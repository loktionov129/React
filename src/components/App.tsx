import * as React from 'react';
import store from '../state';
import './App.scss';

class Main extends React.Component<{}, {}> {

  render() {
    return (
      <h1>Hello React!</h1>
    );
  }
}

const App = () => (<Main />);
export default App;

console.warn(store.getState());
store.subscribe(() => console.warn('new state:::', store.getState()));

store.dispatch({type: 'INCREASE_COUNTER'});
store.dispatch({type: 'LOAD_HEROES'});
store.dispatch({type: 'INCREASE_COUNTER'});
