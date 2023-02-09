import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "./TaskForm.module.css"

import { ITask } from '../interfaces/ITask';

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    handleUpdate?(id: number, title: string, need: number): void
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [need, setNeed] = useState<number>(0)

    useEffect(() => {
        if (task) {
            setId(task.id)
            setTitle(task.title)
            setNeed(task.need)
        }
    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (handleUpdate) {
            handleUpdate(id, title, need)
        } else {
            const id = Math.floor(Math.random() * 100000)

            const newTask: ITask = { id, title, need }
    
            setTaskList!([...taskList, newTask])
    
            setTitle("")
            setNeed(0)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setNeed(parseInt(e.target.value))
        }
    }

    return (
        <form className={styles.form} onSubmit={addTaskHandler}>

            <div className={styles.input_container}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder='Task title'
                    onChange={handleChange}
                    value={title}
                />
            </div>

            <div className={styles.input_container}>
                <label htmlFor="need">Need level:</label>
                <input
                    type="number"
                    name="need"
                    placeholder='Task need level'
                    onChange={handleChange}
                    onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                    value={need}
                />
            </div>

            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm