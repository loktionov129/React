import * as React from 'react';
import './App.scss';

export interface AppState {
  count: number;
}

export default class App extends React.Component<{}, AppState> {
  intervalId: number;
  state = { count: 0 };

  // This state will be maintained during hot reloads
  componentWillMount() {
    this.intervalId = window.setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello world!</h1>
        <div>Welcome to hot-reloading React written in TypeScript! {this.state.count}</div>
      </div>
    );
  }
}
