import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <TextInput  
          style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
          placeholder="Enter your name.."  
          onChangeText={(text) => this.setState({text})}  
      /> 
      <Text>CRAVE</Text>
      <Text>Grab a bite!</Text>
      <Text>Make a connection</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
