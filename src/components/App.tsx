import * as React from 'react';
import './App.scss';
import { TodoForm } from '../components/todo-form';
import { TodoList } from '../components/todo-list';

interface MainState {
  todos: string[];
}

class Main extends React.Component<{}, MainState> {
  private mockItems: string[] = [
    'item #1', 'item #2', 'item #3', 'item #4'
  ];

  constructor(props: any) {
    super(props);
    this.state = { todos: this.mockItems };
  }

  AddItem = (newTodo: string): void => {
    console.warn(newTodo);
    this.setState((prevState) => {
      return {todos: [...prevState.todos, newTodo]};
    });
  }

  render() {
    return (
      <div className='app'>
        <TodoForm onItemAdd={this.AddItem} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

const App = () => (<Main />);
export default App;
