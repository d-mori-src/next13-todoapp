'use client';

import { addTodo } from '@/api';
import { useState, FormEvent, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AddTodo = () => {
    const [todoTitle, setTodoTitle] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await addTodo({ id: uuidv4(), text: todoTitle });
        setTodoTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                onChange={(e: ChangeEvent<HTMLInputElement>)=> {setTodoTitle(e.target.value)}}
                value={todoTitle}
            />
            <button>TODOを追加する</button>
        </form>
    );
}