import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/Grid';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class App extends react.Component {
  render(){
    return (


          <Grid/>

    );
  }
}
