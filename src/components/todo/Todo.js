import './todo.scss';

const Todo = ({heading}) =>{


    return(
        <li className='todo__item'>
            <h2 className='todo__item-heading'>
                {heading}
            </h2>
            <div>
                <button  className='todo__item-btn btn btn-warning'> ssss </button>
                <button className='todo__item-delete-btn btn btn-danger'> delte </button>
            </div>
        </li>
    )
}

export default Todo
