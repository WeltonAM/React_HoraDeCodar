import React, { useState } from 'react';

import styles from './App.module.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { ITask } from './interfaces/ITask';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, need: number) => {
    
    const updatedTask: ITask = { id, title, need }

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    }) 

    setTaskList(updatedItems)

    hideOrShowModal(false)
  }

  return (
    <div className="App">

      <Modal children={
        <TaskForm
          btnText='Edit task'
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />
      } />

      <Header />

      <main className={styles.main}>
        <div>
          <h2>What are going to do?</h2>
          <TaskForm
            setTaskList={setTaskList}
            btnText='Create Task'
            taskList={taskList}
          />
        </div>

        <div>
          <h2>Tasks:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEditTask={editTask} />
        </div>

      </main>

      <Footer />

    </div>
  );
}

export default App;
