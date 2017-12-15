import * as React from 'react';

export interface TodoFormProps {
  onItemAdd: (newTodo: string) => void;
}

export class TodoForm extends React.Component<TodoFormProps, {}> {
  constructor(props: any) {
    super(props);
  }

  handleSubmit = (e: any) => {
    this.props.onItemAdd((this.refs.todoName as HTMLInputElement).value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='todo name...' ref='todoName' />
        <button type='submit'>send</button>
      </form>
    );
  }
}
