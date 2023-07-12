import { StyleSheet, SafeAreaView} from 'react-native';
import { Home } from './src/components/Home';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <Home/>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor : '#000',
    paddingTop :28
  }
});
