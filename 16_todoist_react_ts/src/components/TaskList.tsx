import React from 'react'
import styles from './TaskList.module.css'

import { ITask } from '../interfaces/ITask'

interface Props {
  taskList: ITask[],
  handleDelete(id: number): void,
  handleEditTask(task: ITask):void
}

const TaskList = ({ taskList, handleDelete, handleEditTask }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Level: {task.need}</p>
            </div>
            
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={() => handleEditTask(task)}></i>
              <i className='bi bi-trash' onClick={() => {handleDelete(task.id)}}></i>
            </div>
          </div>
        ))
      ) : (
        <p>No Tasks</p>
      )}
    </>
  )
}

export default TaskList