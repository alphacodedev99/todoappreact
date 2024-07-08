import React, { useState } from 'react';
import '../styles/todoinput.scss';

function TodoInputComponent({ todoTask, setTodoTask }) {
	const [currentTask, setCurrentTask] = useState('');

	function handleTodoTask() {
        // console.log(currentTask);
        setTodoTask([...todoTask, {task: currentTask, id: new Date().getTime()}]);
        setCurrentTask('');
    }


    function handleInputTask(event) {
        setCurrentTask(event.target.value);
    }

	return (
		<div className='container todoinput'>
			<input
				type='text'
				placeholder='insert your task'
				className='todoinput_input'
                value={currentTask}
				onChange={(event) => handleInputTask(event)}
			/>
			<button className='todoinput_button' onClick={handleTodoTask}>
				Add Task
			</button>
		</div>
	);
}

export default TodoInputComponent;
