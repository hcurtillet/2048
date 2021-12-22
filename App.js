import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/Grid';

export default class App extends react.Component {
  render(){
    return (
      <View style={styles.container}>
        <Grid/>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
