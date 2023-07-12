import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


type TasksProps = {
  title: string
}
interface propTypes {
  tasks: TasksProps[] | undefined
}

export const TaskList = (props: propTypes) => {
  return (
    <View>
      {props.tasks && props.tasks.map((item, index) =>
        <View style={styles.task} key={index}>
          <Text style={styles.taskText}>
            {item.title}
          </Text>

          <TouchableOpacity>
            <Text>
              🗑️
            </Text>
          </TouchableOpacity>
        </View>)}
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#121212',
    fontSize: 10,
    marginVertical: 8,
    padding: 16,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 6
  },
  taskText: {
    fontSize: 16,
    color: 'white',
  },
});
