import { StyleSheet, SafeAreaView} from 'react-native';
import { Home } from './src/components/Home';
import { StatusBar } from 'expo-status-bar';
import { TaskProvider } from './src/context/tasksContext';

export default function App() {

  return (
    <TaskProvider>
      <SafeAreaView style={styles.safeArea}>
        <Home/>
        <StatusBar style="light" />
      </SafeAreaView>
    </TaskProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor : '#000',
    paddingTop :28
  }
});
