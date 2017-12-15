import * as React from 'react';
import { TodoItem } from '../../components/todo-item';

export const TodoList = ({todos}: any) => (
  <ul className='todo-itemsq'>
  {
    todos.map((todo: string, index: number) => (<TodoItem todo={todo} key={index} />))
  }
  </ul>
);
