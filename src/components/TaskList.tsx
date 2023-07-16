import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'


type TasksProps = {
  id : string
  title: string
}
interface propTypes {
  tasks: TasksProps[] | undefined
}

export const TaskList = ({tasks}: propTypes) => {
  return (
    <View>
      <FlatList 
      data={tasks}
      keyExtractor={(item)=> item.id}
      renderItem={({item}) =>
        <View style={styles.task}>
          <Text style={styles.taskText}>
            {item.title}
          </Text>

          <TouchableOpacity>
            <Text>
              🗑️
            </Text>
          </TouchableOpacity>
        </View>}
      >
      
      </FlatList>
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
