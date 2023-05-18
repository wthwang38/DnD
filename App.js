import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';


export default function App() {

  const pressHandler = () => console.log('proceed with FB')
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRAVE</Text>
      <Text style={styles.subtitle}>GRAB A BITE</Text>
      <Text style={styles.subtitle}>MAKE A CONNECTION</Text>
      <StatusBar style="auto" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>

        <TouchableOpacity style={styles.FBbutton} onPress={() => pressHandler()}
          title="Connect to Facebook">
            <Text style={{color: 'white', fontSize: 18, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30, paddingVertical: 12}}>
              Continue with Facebook
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cellbutton} onPress={() => pressHandler()}
          title="Use cell phone number">
            <Text style={{color: 'white', fontSize: 18, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30, paddingVertical: 12}}>
              Use cell phone number
            </Text>
        </TouchableOpacity>

        <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 90}}>
          <Text style={{textAlign: 'center'}}>
            By signing up, you agree to our <Text style={{fontWeight: 'bold', fontStyle: 'italic' }}>Terms.</Text> 
            See how we use your data in our <Text style={{fontWeight: 'bold', fontStyle: 'italic' }}>Privacy Policy.</Text>
          </Text>
          <Text style={{textAlign: 'center'}}>We never post to Facebook.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 300,
    backgoundColor: 'red',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    padding: 8,
    backgroundColor: 'red',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    paddingBottom: 2,
    color: '#af58a8'
  },
  FBbutton: {
    borderColor: 'white',
    marginTop: 350,
    margin: 8,
    borderWidth: 1,
    backgroundColor: 'blue',
    color: '#fff'
  },
  cellbutton: {
    borderColor: 'white',
    margin: 8,
    borderWidth: 1,
    backgroundColor: '#af58a8',
    color: '#fff'
  }
});
