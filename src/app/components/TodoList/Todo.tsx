import { editTodo, deleteTodo } from '@/api';
import { TodoProps } from '@/types';
import { useState, useEffect,  useRef, ChangeEvent } from 'react';

export const Todo = ({ todos }: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);

    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskTitle, setEditedTaskTitle] = useState(todos.text);

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus();
        }
    }, [isEditing])
 
    const handleEdit = async () => {
        setIsEditing(true)
    }
    const handleSave = async () => {
        await editTodo(todos.id, editedTaskTitle);
        setIsEditing(false)
    }
    const handleDelete = async () => {
        await deleteTodo(todos.id);
    }

    return (
        <li key={todos.id}>
            {isEditing ? (
                <div>
                    <input 
                        ref={ref}
                        type="text" 
                        value={editedTaskTitle}
                        onChange={(e: ChangeEvent<HTMLInputElement>)=> {setEditedTaskTitle(e.target.value)}}
                    />
                </div>
            ): (
                <div>{todos.text}</div>
            )}
            
            <div>
                {isEditing ? (
                    <button onClick={handleSave}>保存</button>
                ): (
                    <button onClick={handleEdit}>編集</button>
                )}
            
                <button onClick={handleDelete}>削除</button>
            </div>
        </li>
    );
}