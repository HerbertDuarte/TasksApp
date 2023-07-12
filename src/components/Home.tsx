import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { TaskList } from './TaskList'

export const Home: React.FC = () => {

  interface TasksInterface {
    title: string
  }

  const [tasks, setTasks] = useState<TasksInterface[]>()
  const [inputValue, setInputValue] = useState<string>()
  const [error, setError] = useState<string>()

  const addTask = (input: string) =>{
    const newTask = {
      title: input
    }
    setTasks((prev): TasksInterface[] => {
      if (prev) {
        return [...prev, newTask]
      }
      return [newTask]
    })
  }

  const onClick = (input: string | any) => {
    addTask(input)
    setInputValue('')
    console.log('funcionou')
    setError('')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome, Dev</Text>

      <TextInput placeholder='New task...' placeholderTextColor='#555' onChangeText={setInputValue} value={inputValue} style={styles.textInput} />
      {error && (<Text style={styles.error}>{error}</Text>)}

      <TouchableOpacity onPress={() => inputValue ? onClick(inputValue) : setError('Task empty')} style={styles.button} activeOpacity={0.85}>
        <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => setTasks(undefined)} style={styles.button} activeOpacity={0.85}>
        <Text style={styles.textButton}>Deletar</Text>
      </TouchableOpacity> */}

      <View  style={styles.taskContainer}>
        <Text style={styles.title}>My Tasks</Text>
        <TaskList tasks={tasks}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
  },
  text: {
    fontSize: 24,
    color: 'white',
    padding: 4,
    fontWeight: '800',
  },
  title: {
    fontSize: 24,
    color: 'white',
    padding: 4,
    fontWeight: '900'
  },
  textInput: {
    backgroundColor: '#222',
    padding: 10,
    marginTop: 12,
    borderRadius: 8,
    fontSize: 18,
    color: 'white',
  },
  textButton: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight: '900'
  },
  button: {
    backgroundColor: 'orange',
    padding: 16,
    marginVertical: 16,
    borderRadius: 8,
  },
  error: {
    color: 'red'
  },
  taskContainer :{
    paddingTop : 12
  },
});
