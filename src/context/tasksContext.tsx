import React, { createContext, FunctionComponent, ReactElement, useState } from 'react'

interface ITaskContext {
  id : string
  title: string
}
type ITasks = ITaskContext[]

interface IProps {
  children : ReactElement
}

export const TaskContext = createContext<ITasks | never[] >([])
export const [tasks, setTasks] = useState<ITasks>([{
  id : 'handleid',
  title : 'task title'
}])

export const addTask = (input: string) =>{
  const newTask = {
    id : 'um id qualquer',
    title: input
  }
  setTasks((prev): ITasks => {
    if (prev) {
      return [...prev, newTask]
    }
    return [newTask]
  })
}

export const TaskProvider : FunctionComponent<IProps> = ({children}) =>{

  return(
    <TaskContext.Provider value={tasks}>
      {children}
    </TaskContext.Provider>
  )

}