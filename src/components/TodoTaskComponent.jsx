/* eslint-disable react/prop-types */
import '../styles/todotask.scss';

function TodoTaskComponent({todoTask}) {
  return (
    <div className='container'>
        {todoTask.length > 0 ? todoTask.map((task) => (
            <div className='task' key={task.id}>
                <p>{task.task}</p>
                <button>Remove</button>
            </div>
        )) : <h2>Unesi novi task...</h2>}
    </div>
  )
}

export default TodoTaskComponent