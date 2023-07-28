'use client';

import { TodoListProps } from '../../../types';
import { Todo } from './Todo';

export const TodoList = ({ todos }: TodoListProps) => {
    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id} todos={todo} />
            ))}
        </ul>
    );
}