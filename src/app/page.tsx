import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/TodoList';
import { getAllTodos } from '../api';

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main>
      <div>
        <div>
          <AddTodo />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
